import React from 'react'
import CartItem from './CartItem'

const CartItemContainer =  () => {
    const cart = [];

    return(
        <div className="container-cartItemContainer">
            <CartItem />
            <button className="button-cartItemContainer">
                CLEAR CART
            </button>
            <div className="total-cartItemContainer">
                <h1>TOTAL: 1200$</h1> 
            </div>
        </div>
    )
}

export default CartItemContainer;

