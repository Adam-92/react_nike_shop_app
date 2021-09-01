import React, {useState,useEffect} from 'react'
import CartItem from './CartItem'
import {useGlobalContext} from '../context'

const CartItemContainer =  () => {
    const {cart,clearCart,newCart,btnRefs} = useGlobalContext();
    const [totalPrice, setTotalPrice] = useState(0);

    const deleteShoeFromCart = (id) =>{
        const btnShoeDOM = btnRefs.find(btn => parseInt(btn.id) === id );
        //change DOM STATUS to original PUT INTO CART
        btnShoeDOM.innerText = 'PUT IN CART';
        btnShoeDOM.style.cursor = 'pointer';
        btnShoeDOM.style.backgroundColor = 'orange';
        btnShoeDOM.style.color = 'white';
        btnShoeDOM.disabled = false;
        //delete from cart
        const newCartArray = cart.filter(shoe => shoe.id !== id);
        newCart(newCartArray);
    }
    //count total price of shoes in cart
    const countTotalPrice = () => {
        let total = 0;
        cart.forEach(shoe => total += shoe.price);
        setTotalPrice(total);
    }
    useEffect( () => {
    console.log('k')

        countTotalPrice();
    },[cart])

    return(
        <div className="container-cartItemContainer">
            {cart.map(shoe => {
                const id = shoe.id;
                return(
                    <CartItem {...shoe} key={id} deleteShoeFromCart={deleteShoeFromCart}/>
                )
            })}
            <button className="button-cartItemContainer" onClick={clearCart}>
                CLEAR CART
            </button>
            <div className="total-cartItemContainer">
                <h1>TOTAL: {totalPrice}$</h1> 
            </div>
        </div>
    )
}

export default CartItemContainer;

