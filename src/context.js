import React, {useEffect,useState,useContext} from 'react';
import  {auth} from './firebase'
import databaseShoes from './databaseShoes';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [currentUser, setCurrentUser] = useState();
    //if the validation is correct, switch to true (show success component)
    const [isSubmitted, setIsSubmitted] = useState(false);
    //turn on/off LoadingApiResponse component if the validation is successed
    const [loading, setLoading] = useState(false);
    //set the tab component visibility as a DOM element
    const [tabVisibility, setTabVisibility] = useState(true);
    /*toggle beewten tabs -> login/register, register/login.
    switch beeten RegisterComponent and LoginComponent*/
    const [tab, setTab] = useState(false);
    //js file with the database shoes 
    const [dataShoes, setDataShoes] = useState(databaseShoes);
    //open/close cart component
    const [openCart,setOpenCart] = useState(false);
    //array for gathering picked shoes 
    const [cart, setCart] = useState([]);
    //btn refs - used to change the DOM status PUT IN CART/ IN CART
    const [btnRefs, setBtnRefs] = useState([]);

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user=> { 
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])

    //create new user with email using Firebase
    const signup = (email,password) =>{
        return auth.createUserWithEmailAndPassword(email,password)
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
              tabVisibility,
              signup,
              addRef,
              setTabVisibility,
              setTab,
              setLoading,
              setIsSubmitted,
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