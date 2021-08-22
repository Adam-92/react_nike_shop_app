import React from 'react'

const CartItem = ({img, modelName,price,id}) => {
    return(
        <div className="container-cartItem">
            <div className="picture-cartItem-cart">
                <img src={img}></img>
            </div>
            <div className="name-cartItem-cart">
                <p>{modelName}</p>
            </div>
            <div className="quantity-cartItem-cart">
                <p>{price}</p>
            </div>
        </div>
    )
}

export default CartItem;