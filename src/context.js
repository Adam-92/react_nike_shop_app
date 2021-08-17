import React, {useState,useContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tab, setTab] = useState(false);
    //if it's true then return in PAGE-> Register, RegisterSucces component
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

    return(
        <AppContext.Provider value={
            {
              isSubmitted,
              loading,
              tab,
              turnOnLoading,
              turnOffLoading,
              submitedForm,
              switchTab
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