import React from 'react'
import CartItem from './CartItem'
import {useGlobalContext} from '../context'

const CartItemContainer =  () => {
    const {cart,clearCart} = useGlobalContext();

    return(
        <div className="container-cartItemContainer">
            {cart.map(shoe => {
                const id = shoe.id;
                return(
                    <CartItem {...shoe} key={id}/>
                )
            })}
            <button className="button-cartItemContainer" onClick={clearCart}>
                CLEAR CART
            </button>
            <div className="total-cartItemContainer">
                <h1>TOTAL: 1200$</h1> 
            </div>
        </div>
    )
}

export default CartItemContainer;

