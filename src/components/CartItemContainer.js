import React, { useState, useEffect, useCallback } from "react";
//Import component
import CartItem from "./CartItem";
//Import global context
import { useGlobalContext } from "../context/Context";

const CartItemContainer = () => {
  const { cart, newCart, btnRefs } = useGlobalContext();
  //Total price of shoes in cart
  const [totalPrice, setTotalPrice] = useState(0);
  //Change DOM STATUS to original 'PUT INTO CART'
  const changeCSS = (button) => {
    button.innerText = "PUT IN CART";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "orange";
    button.style.color = "white";
    button.disabled = false;
  };

  //Delete the shoe from the cart
  const deleteShoeFromCart = (id) => {
    //Find the correct button
    const button = btnRefs.find((btn) => parseInt(btn.id) === id);
    changeCSS(button);
    //Delete from the cart
    const newCartArray = cart.filter((shoe) => {
      if (shoe.id === id) {
        shoe.amount = 1;
        return null;
      }
      return shoe;
    });
    newCart(newCartArray);
  };

  //Count total price of shoes in cart
  const countTotalPrice = useCallback(() => {
    let total = 0;
    cart.forEach((shoe) => {
      const eachShoe = shoe.amount * shoe.price;
      total += eachShoe;
    });
    setTotalPrice(total);
  }, [cart]);

  //Add the amount of picked shoe in the cart
  const addAmount = (id) => {
    const newCartArray = cart.filter((shoe) => {
      if (shoe.id === id) {
        shoe.amount++;
      }
      return shoe;
    });
    newCart(newCartArray);
  };

  //Subtract the amount of picked shoe in the cart
  const subtractAmount = (id) => {
    const newCartArray = cart.filter((shoe) => {
      if (shoe.id === id) {
        const button = btnRefs.find((btn) => parseInt(btn.id) === id);
        return shoe.amount > 1 ? shoe.amount-- : changeCSS(button) && null;
      }
      return shoe;
    });
    newCart(newCartArray);
  };

  //Clear the cart
  const clearCart = () => {
    btnRefs.forEach((button) => changeCSS(button));
    //Change the amount to 1
    const newArray = cart.filter((shoe) => {
      shoe.amount = 1;
      return null;
    });
    newCart(newArray);
  };

  //After every render make a calculation
  useEffect(() => {
    countTotalPrice();
  }, [cart, countTotalPrice]);

  return (
    <div className="container-cartItemContainer">
      {cart.map((shoe) => {
        const id = shoe.id;
        return (
          <CartItem
            {...shoe}
            key={id}
            deleteShoeFromCart={deleteShoeFromCart}
            addAmount={addAmount}
            subtractAmount={subtractAmount}
          />
        );
      })}
      <button className="button-cartItemContainer" onClick={clearCart}>
        CLEAR CART
      </button>
      <div className="total-cartItemContainer">
        <h1>TOTAL: {totalPrice} $</h1>
      </div>
    </div>
  );
};

export default CartItemContainer;
