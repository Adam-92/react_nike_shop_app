import React from 'react'

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
    return(
        <div className="container-shoe">
            <div className="img-shoe">
                <img src={img}></img>
            </div>
            <div>
                <h3 className="name-shoe">
                    {modelName}
                </h3>
            </div>
            <div className="information-shoe">
                <p>Size: {availableSize}</p>
                <p>Price: {price}$</p>
            </div>
        </div>
    )
}

export default Shoe;