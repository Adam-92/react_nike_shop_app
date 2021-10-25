import React from 'react'
//Import global context
import {useGlobalContext} from '../context/Context'

//Shoe component appears in the main view of shoppingPage
const Shoe = ( {id,model,price,size,img} ) =>{
    const {newCart,cart, addRef,data} = useGlobalContext();
    //Create ref to button
    let buttonRef = React.createRef();
    
    //Put shoe into cart
    const putIntoCart = (e,id) =>{
        //Find in data correct shoe by ID
        const shoe = data.find(shoe => shoe.id === id);
        //Take the target DOM shoe
        const item = e.target;
        //Add shoe and check the content to not double the shoe
        const checkShoe = cart.some(item => item.id === shoe.id);

        if(!checkShoe){
            //Change the style of added shoe
            item.innerText = 'IN CART';
            item.style.color = 'green';
            item.style.backgroundColor = 'white';
            item.style.cursor = 'default';
            item.disabled = true;
            newCart([...cart, shoe]);
        }
        //Add DOM button to btnRefs array
        addRef(buttonRef.current);
    }

    return(
        <div className="container-shoe">
            <div className="img-shoe">
                <img src={img} alt={model}></img>
            </div>
            <div>
                <h5 className="name-shoe">
                    {model}
                    <div className="underline-shoe"></div>
                </h5>
            </div>
            <div className="information-shoe">
                <h5>Size: {size}</h5>
                <h5>Price: {price}$</h5>
            </div>
            <div className="putIntoCart-shoe">
                <button onClick={(e)=>putIntoCart(e,id)} ref={buttonRef} id={id}>PUT IN CART</button>
            </div>
        </div>
    )
}

export default Shoe;