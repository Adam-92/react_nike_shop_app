import React, {useState,useContext} from 'react';
import  {auth} from './firebase'
import databaseShoes from './databaseShoes';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [currentUser, setCurrentUser] = useState();
    //if the validation is correct, switch to true (show success component)
    const [isSubmitted, setIsSubmitted] = useState(false);
    //turn on/off loading component if the validation is successed
    const [loading, setLoading] = useState(false);
    //switch tab login to register, if false then is set to register (www/login)
    const [tab, setTab] = useState(false);
    //if true then in /user after clicking on profile icon show information
    const [openProfile, setOpenProfile] = useState(true);
    //js file with the database shoes 
    const [dataShoes, setDataShoes] = useState(databaseShoes);
    //open/close cart component
    const [openCart,setOpenCart] = useState(false);
    //array for gathering picked shoes 
    const [cart, setCart] = useState([]);
    //btn refs - used to change the DOM status PUT IN CART/ IN CART
    const [btnRefs, setBtnRefs] = useState([]);

    const signup = (email,password) =>{
        auth.createUserWithEmailAndPassword();
    }

    //change the state isSubmitted to true
    const submitedForm = () => {
        setIsSubmitted(true);
    }
    //change the state loading to true
    const turnOnLoading = () =>{
        setLoading(true);
    }
    //change the state loading to false
    const turnOffLoading = () => {
        setLoading(false);
    }
    /*toggle beewten tabs -> login/register, register/login.
      switch beeten RegisterComponent and LoginComponent*/
    const switchTab = () =>{
        setTab(!tab);
    }
    //Open the Cart component after clicking on Cart icon in right corner
    const openCartFunc = () => {
        setOpenCart(true)
    }
    //Close the Cart component after clicking on Cart icon in right corner
    const closeCartFunc = () => {
        setOpenCart(false)
    }
    //Set new array of cart
    const newCart = (array) => {
        setCart(array);
    }
    //add new reffrence of the DOM button - this helps to change the css of the button
    const addRef = (ref) => {
        setBtnRefs([...btnRefs, ref]);
    }
    
    return(
        <AppContext.Provider value={
            { 
              currentUser,
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