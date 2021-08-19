import React from 'react'

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
    return(
        <div className="shoe">
            <header>
                <h2>{modelName}</h2>
                <div className="underline"></div>
            </header>
            <div className="img-shoe">
                <img src={img}></img>
            </div>
            <footer>
                <p>{availableSize}</p>
                <p>{price}</p>
            </footer>
        </div>
    )
}

export default Shoe;