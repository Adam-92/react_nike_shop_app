import React, { useEffect, useState, useContext } from "react";
//Import firebase authentication
import { auth } from "../config_firebase/firebase";

//Create context
const AppContext = React.createContext();

//Contenfull config
const contenfullConfig = {
  space: "ecg5hum2lttf",
  token: "plYkQzohukQgIMiWaYRkjysVjmIuDioUedjUiiqqQCI",
};

//Contenfull query
const query = `
     {
        nikeShopCollection{
            items{
                
                id,
                   model,
                   img,
                   price,
                   size,
                   amount
                }
            }
    }`;

const AppProvider = ({ children }) => {
  //Database with shoes
  const [data, setData] = useState([]);
  //Check the state of user, if login or not
  const [currentUser, setCurrentUser] = useState();
  //if the validation is correct, switch to true (show success component)
  const [isSubmitted, setIsSubmitted] = useState(false);
  //Turn on/off LoadingApiResponse component if the validation is successed
  const [loading, setLoading] = useState(false);
  //Set the tab component visibility as a DOM element
  const [tabVisibility, setTabVisibility] = useState(true);
  /*Toggle beewten tabs -> login/register, register/login. 
     if state is 1 then register tab is highlighted, 2 -login*/
  const [tabToggle, setTabToggle] = useState(1);
  //Open/close the Cart component after clicking on Cart icon in right corner
  const [openCart, setOpenCart] = useState(false);
  //Array for gathering picked shoes
  const [cart, setCart] = useState([]);
  //Btn refs - used to change the DOM status PUT IN CART/ IN CART
  const [btnRefs, setBtnRefs] = useState([]);
  //Error for gathering info about fetch issues
  const [error, setError] = useState({
    fetch: "",
    logout: "",
  });
  //Render the application if response has came back (status of the currentUser)
  const [pending, setPending] = useState(true)
 
  useEffect(() => {
    //Check if the user is logged or not
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      //Render the application if response has came back (status of the currentUser)
      setPending(false)
    });
    return unsubscribe;
  }, []);

  useEffect( () => {
    fetchProducts()
  },[])


  //Create a new user with email using Firebase
  const signup = async (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  //Login to a user account
  const login = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  //Logut 
  const logout = async () => {
    return auth.signOut();
  };
  //Set new array of cart
  const newCart = (array) => {
    setCart(array);
  };
  //Add new reffrence of the DOM button - this helps to change the css of the button
  const addRef = (ref) => {
    setBtnRefs([...btnRefs, ref]);
  };

  //Fetch data 
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${contenfullConfig.space}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${contenfullConfig.token}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      );
      const object = await response.json();
      if (object) {
        const array = object.data.nikeShopCollection.items.map((item) => {
          const { id, model, img, size, price, amount } = item;
          return {
            id: id,
            model: model,
            img: img,
            size: size,
            price: price,
            amount: amount,
          };
        });
        setData(array);
      } else {
        setData([]);
      }
    } catch (err) {
      setError({fetch: err });
    }
  }

  return (
    <AppContext.Provider
      value={{
        data,
        currentUser,
        isSubmitted,
        loading,
        tabToggle,
        openCart,
        cart,
        btnRefs,
        tabVisibility,
        error,
        signup,
        login,
        logout,
        addRef,
        setData,
        setTabVisibility,
        setTabToggle,
        setLoading,
        setIsSubmitted,
        setOpenCart,
        newCart,
        setError,
      }}
    > 
      { !pending ? children : null }
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
