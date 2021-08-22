import React from 'react'

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
    return(
        <div className="container-shoe">
            <div>
                <img src={img}></img>
            </div>
            <header>
                <h3 className="name-shoe">
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