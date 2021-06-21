import React, {useState,useContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    //if it's true then return in PAGE-> Register, RegisterSucces component
    const submitedForm = () => {
        setIsSubmitted(true);
    }

    return(
        <AppContext.Provider value={
            {
              isSubmitted,
              submitedForm,
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