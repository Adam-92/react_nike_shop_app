import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context/context'
import CartItemContainer from './CartItemContainer'

const Cart = () => {
    const {openCart,closeCartFunc} = useGlobalContext();

    return(
        <aside className={`container-cart ${openCart && 'show-cart'}`}>
            <div className="content-cart">
                <h1 className="summary-cart">
                    SUMMARY
                </h1>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon-close-cart" onClick={closeCartFunc}/>
                <CartItemContainer />
            </div>
        </aside>
    )
}

export default Cart;