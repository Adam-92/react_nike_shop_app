import React, { useEffect, useRef } from "react";
//Import history from router
import { useHistory } from "react-router-dom";
//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
//Import components
import { UseForm } from "./UseForm";
import LoadingApiResponse from "./LoadingApiResponse";
//Import validation functions
import validate from "../form_validation/validate";
//Import global context
import { useGlobalContext } from "../context/Context";

//Login form component
const LoginComponent = () => {
  //Ref to foucs input after load web
  const focusInput = useRef("");

  const {
    inputValue,
    isSubmitting,
    error,
    setIsSubmitting,
    setError,
    handleSubmit,
    onChangeValue,
  } = UseForm(validate);
  
  const { 
      login, 
      loading, 
      setLoading, 
      setTabVisibility 
  } = useGlobalContext();

  //Create history to switch the route after succesfull login
  const history = useHistory();

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  /*
    Because in Login panel we have only email and password fields we have to delete 
    from const error properties username and confirm_password,
    so our validation check only email and password
  */
  const errorLogin = (object) => {
    if (object.username || object.confirm_password) {
      const { username, confirm_password, ...rest } = object;
      object = rest;
    }
    //Return lenght of values from email and password key, if 0 then we know that there are no errors
    return Object.values(object).length === 0 ? true : false;
  };

  useEffect( () => {
      if (errorLogin(error) && isSubmitting) {
        setLoading(true);
        setTabVisibility(false);
        //Login async
        login(inputValue.email, inputValue.password)
          .then((response) => {
            if (response.user) {
              setLoading(false);
              setTabVisibility(true);
              //switch into address /shoppingPage/user
              history.push("/shopping/user");
              return;
            }
          })
          .catch((err) => {
            setTabVisibility(true);
            setLoading(false);
            setError({ firebaseError: err.message });
            setIsSubmitting(false);
          });
      }
    },[isSubmitting,error]) 
  
  if (loading) {
    return (
      <LoadingApiResponse text="Please wait. We are checking back-end validation." />
    );
  }

  return (
    <div className="container-LoginComponent">
      <header className="header-LoginComponent">
        <h1>Login </h1>
        <div className="underline-LoginComponent"></div>
      </header>
      <div className="form-LoginComponent">
        <form autoComplete="on">
          <div className="input-LoginComponent">
            <input
              type="email"
              placeholder="email@gmail.com"
              name="email"
              ref={focusInput}
              value={inputValue.email}
              onChange={(e) => onChangeValue(e)}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon"
            ></FontAwesomeIcon>
            {error.email ? <p style={{ color: "red" }}>{error.email}</p> : null}
          </div>
          <div className="input-LoginComponent">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputValue.password}
              onChange={(e) => onChangeValue(e)}
            />
            <FontAwesomeIcon icon={faLock} className="icon"></FontAwesomeIcon>
            {error.password ? (
              <p style={{ color: "red" }}>{error.password}</p>
            ) : null}
          </div>
          <div className="btnContainer-LoginComponent">
            <button className="btn-LoginComponent" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
          {/*FirebaseError display if exist*/}
          <div style={{ margin: "1em", color: "red" }}>
            {error.firebaseError && <span>{error.firebaseError}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
