import React from 'react'

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
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
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Shoe;