import React, {useState,useEffect} from 'react'
import CartItem from './CartItem'
import {useGlobalContext} from '../context'

const CartItemContainer =  () => {
    const {cart,newCart,btnRefs} = useGlobalContext();
    //total price of shoes in cart
    const [totalPrice, setTotalPrice] = useState(0);
    //change DOM STATUS to original PUT INTO CART
    const changeCSS = (button) => {   
        button.innerText = 'PUT IN CART';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = 'orange';
        button.style.color = 'white';
        button.disabled = false;
    }
    //delet the shoe from the cart and change the css of this shoe in Shoe component
    const deleteShoeFromCart = (id) =>{
        //find the correct button
        const button = btnRefs.find(btn => parseInt(btn.id) === id );
        changeCSS(button);
        //delete from cart
        const newCartArray = cart.filter(shoe => {
            if(shoe.id === id) {
                shoe.amount = 1;
                return null;
            }
            return shoe;
        });
        newCart(newCartArray);
    }
    //count total price of shoes in cart
    const countTotalPrice = () => {
        let total = 0;
        cart.forEach(shoe =>{
            const eachShoe = shoe.amount * shoe.price;
            total+= eachShoe;
        });
        setTotalPrice(total);
    }
    //add amount of picked shoe in cart
    const addAmount = (id) => {
        const newCartArray = cart.filter(shoe=>{
            if(shoe.id === id){
                shoe.amount++;
            }
            return shoe;
        })
        newCart(newCartArray);
    }
    //subtract amount of picked shoe in the cart
    const subtractAmount = (id) =>{
        const newCartArray = cart.filter(shoe => {
            if(shoe.id === id){
                const button = btnRefs.find(btn => parseInt(btn.id) === id);
                return shoe.amount > 1 ? shoe.amount-- : (changeCSS(button) && null); 
            }
            return shoe;
          }
        )
        newCart(newCartArray);
    }
    //clear the cart
    const clearCart = () => {
        //change the status of button DOM from "IN CART" to "PUT IN CART" after cleared cart
        btnRefs.forEach(button => changeCSS(button));
        //change the amount to 1
        const newArray = cart.filter(shoe => {
            shoe.amount = 1;
            return null;
        });
        console.log(newArray);
        newCart(newArray);
    }

    useEffect( () => {
        countTotalPrice();
    },[cart])

    return(
        <div className="container-cartItemContainer">
            {cart.map(shoe => {
                const id = shoe.id;
                return(
                    <CartItem {...shoe} 
                              key={id} 
                              deleteShoeFromCart={deleteShoeFromCart}
                              addAmount={addAmount}
                              subtractAmount={subtractAmount}/>
                )
            })}
            <button className="button-cartItemContainer" onClick={clearCart}>
                CLEAR CART
            </button>
            <div className="total-cartItemContainer">
                <h1>TOTAL: {totalPrice} $</h1> 
            </div>
        </div>
    )
}

export default CartItemContainer;

