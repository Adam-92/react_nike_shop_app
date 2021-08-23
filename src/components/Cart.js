import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context'
import CartItemContainer from './CartItemContainer'

const Cart = () => {
    const data = useGlobalContext();
    const {openCart,closeCartFunc} = useGlobalContext();

    return(
        <div className={`container-cart ${openCart && 'show-cart'}`}>
            <div className="content-cart">
                <h1 className="summary-cart">
                    SUMMARY
                </h1>
                <FontAwesomeIcon icon={faWindowClose} className="icon-close-cart" onClick={closeCartFunc}/>
                <CartItemContainer />
            </div>
        </div>
    )
}

export default Cart;