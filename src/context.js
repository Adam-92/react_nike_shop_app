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
    //btn refs - used to change the DOM status PUT IN CART/ IN CART
    const [btnRefs, setBtnRefs] = useState([]);

    const addRef = (ref) => {
        setBtnRefs([...btnRefs, ref]);
    }

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
    const clearCart = () => {
        setCart([]);
    }
    const newCart = (cart) => {
        setCart(cart);
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
              btnRefs,
              addRef,
              turnOnLoading,
              turnOffLoading,
              submitedForm,
              switchTab,
              openCartFunc,
              closeCartFunc,
              addToCart,
              clearCart,
              newCart
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