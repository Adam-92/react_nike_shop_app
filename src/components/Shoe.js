import React from 'react'
import {useGlobalContext} from '../context'

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
    const {dataShoes,addToCart,cart} = useGlobalContext();

    const putIntoCart = (id) =>{
        //find in dataShoes correct shoe by ID
        const shoe = dataShoes.find(shoe => shoe.id === id);
        //add shoe if cart is empty
        if(cart.length  === 0){
            addToCart(shoe);
        }else{
            //if cart is not empty check the content to not double the shoe
            const checkShoe = cart.some(item => item.id === shoe.id)
            return checkShoe ? '' : addToCart(shoe);
        }
    }

    return(
        <div className="container-shoe">
            <div className="img-shoe">
                <img src={img}></img>
            </div>
            <div>
                <p className="name-shoe">
                    {modelName}
                    <div className="underline-shoe"></div>
                </p>
            </div>
            <div className="information-shoe">
                <p>Size: {availableSize}</p>
                <p>Price: {price}$</p>
            </div>
            <div className="putIntoCart-shoe">
                <button onClick={()=>putIntoCart(id)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Shoe;