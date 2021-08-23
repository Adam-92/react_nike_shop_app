import React, {useState,useContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [tab, setTab] = useState(false);
    //open/close cart side component
    const [openCart,setOpenCart] = useState(false);
    //array for gathering picked shoes and then display them into cart
    const [cart, setCart] = useState([]);

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

    const putShoeIntoCart = (id) => {
        
    }


    return(
        <AppContext.Provider value={
            {
              isSubmitted,
              loading,
              tab,
              openCart,
              turnOnLoading,
              turnOffLoading,
              submitedForm,
              switchTab,
              openCartFunc,
              closeCartFunc
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