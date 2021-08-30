import React from 'react'
import {useGlobalContext} from '../context'

const Shoe = React.forwardRef( ({id,modelName,price,availableSize,img}, ref) =>{
    const {dataShoes,addToCart,cart} = useGlobalContext();

    const putIntoCart = (e,id) =>{
        //find in dataShoes correct shoe by ID
        const shoe = dataShoes.find(shoe => shoe.id === id);
        //take the target DOM shoe
        const item = e.target;
        //add shoe and check the content to not double the shoe
        const checkShoe = cart.some(item => item.id === shoe.id);

        if(!checkShoe){
            //change the status-style of added shoe
            item.innerText = 'IN CART';
            item.style.color = 'green';
            item.style.backgroundColor = 'white';
            item.style.cursor = 'default';
            item.disabled = true;
            addToCart(shoe);
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
                <button onClick={(e)=>putIntoCart(e,id)} ref={ref} data-id={id} >ADD TO CART</button>
            </div>
        </div>
    )
})

export default Shoe;