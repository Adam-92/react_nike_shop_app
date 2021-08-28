import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const CartItem = ( {img,modelName,price}) => {
    return(
        <div className="container-cartItem">
            <div className="picture-cartItem">
                <img 
                     src={img}>
                </img>
            </div>
            <div className="name-cartItem">
                <p>{modelName}</p>
                <p className="price-cartItem">
                    {price}$
                </p>
            </div>

            <div className="quantity-cartItem">                
                <FontAwesomeIcon icon={faChevronLeft} className="icon-cartItem"/>
                    <p>0</p>
                <FontAwesomeIcon icon={faChevronRight} className="icon-cartItem"/>
            </div>
        </div>
    )
}

export default CartItem;