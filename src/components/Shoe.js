import React from 'react'

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
    return(
        <div className="shoe">
            <div>
                <img src={img}></img>
            </div>
            <header>
                <h3 className="modelName">
                    {modelName}
                </h3>
            </header>
            <div>
                <p>Size: {availableSize}</p>
                <p>Price: {price}$</p>
            </div>
        </div>
    )
}

export default Shoe;