import React, {useState,useContext} from 'react';
import databaseShoes from './databaseShoes';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [tab, setTab] = useState(false);
    //js file with the database shoes 
    const [dataShoes, setDataShoes] = useState(databaseShoes);
    //open/close cart component
    const [openCart,setOpenCart] = useState(false);
    //array for gathering picked shoes 
    const [cart, setCart] = useState([]);
    console.log(cart);
    const submitedForm = () => {
        setIsSubmitted(true);
    }

    const turnOnLoading = () =>{
        setLoading(true);
    }

    const turnOffLoading = () => {
        setLoading(false);
    }
    
    const switchTab = () =>{
        setTab(!tab);
    }
    const openCartFunc = () => {
        setOpenCart(true)
    }
    const closeCartFunc = () => {
        setOpenCart(false)
    }
    const addToCart = (shoe) => {
        //check if shoe is not already in the cart
        
        setCart([...cart, shoe]);
    }

    return(
        <AppContext.Provider value={
            {
              isSubmitted,
              loading,
              tab,
              openCart,
              dataShoes,
              cart,
              turnOnLoading,
              turnOffLoading,
              submitedForm,
              switchTab,
              openCartFunc,
              closeCartFunc,
              addToCart
            }
        }>

            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};