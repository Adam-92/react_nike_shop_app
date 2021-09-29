import React,{useEffect,useRef} from 'react'
import {useHistory} from 'react-router-dom'
import {useGlobalContext} from '../context/context'
import {UseForm} from './UseForm'
import validate from '../validate'
//import loading component
import LoadingApiResponse from './LoadingApiResponse'
//import font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,} from '@fortawesome/free-solid-svg-icons'

const LoginComponent = () => {
    //ref to foucs input after load web 
    const focusInput = useRef('');
    //import from UseForm
    const {inputValue,isSubmitting,error,setIsSubmitting,setError,handleSubmit, onChangeValue} = UseForm(validate);
    //import from Context
    const {login,loading,setLoading,setTabVisibility} = useGlobalContext();
    //create history to switch the route after succesfull login
    const history = useHistory();
    
    
    useEffect( () => {
        focusInput.current.focus();
    },[])

    /*Because in Login panel we have only email and password fields we have to delete 
      from const error properties username and confirm_password, so our validation check only username and email*/
    const errorLogin = (object) => {
        if(object.username || object.confirm_password){
            const {username,confirm_password, ...rest} = object;
            object = rest;
        }
        //return lenght of values from email and password key, if 0 then we know that there are no errors
        return Object.values(object).length === 0 ? true : false;
    }

    //if user pressed the submit and there are no errors carry out asynchronic function signup and make an account in firebase
    useEffect( () => {
        if( errorLogin(error) && isSubmitting){
            //turn on loading component
            setLoading(true)
            //turn off tab visibility
            setTabVisibility(false)
            //login
            login(inputValue.email, inputValue.password)
            .then( response => {
                if(response.user){
                    setLoading(false)
                    setTabVisibility(true)
                    history.push('/shoppingPage/user')
                }
            })
            //if there is problem with the creating firebase acc then display message 
            .catch( err => {
                setTabVisibility(true);
                setLoading(false)
                setError({firebaseError : err.message})
                setIsSubmitting(false);
            })
        }
    }, [isSubmitting,error])    

    //if loading true then show loading screen
    if(loading){
        return(
            <LoadingApiResponse />
        )
    }

    return(
        <div className='container-LoginComponent'>
            <header className="header-LoginComponent">
                <h1>Login </h1>
                <div className="underline-LoginComponent"></div>
            </header>
            <div className="form-LoginComponent">
                <form autoComplete="on">
                        <div className='input-LoginComponent'>
                            <input
                                type='email' 
                                placeholder='email@gmail.com'
                                name='email'
                                ref={focusInput}
                                value={inputValue.email}
                                onChange={(e)=>onChangeValue(e)}  
                            />
                            <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                            {error.email ? <p style={{color: 'red'}}>{error.email}</p> : null}   
                        </div>
                        <div className='input-LoginComponent'>
                            <input
                                type='password' 
                                placeholder='Password'
                                name='password'
                                value={inputValue.password}
                                onChange={(e)=>onChangeValue(e)}  
                            />
                            <FontAwesomeIcon icon={faLock} className="icon"></FontAwesomeIcon>
                            {error.password ? <p style={{color: 'red'}}>{error.password}</p> : null}                        
                        </div>     
                        <div className="btnContainer-LoginComponent">
                            <button className="btn-LoginComponent" onClick={handleSubmit}>SUBMIT</button>
                        </div>
                        {/*firebaseError display if exist*/}
                        <div style={{margin: '1em',color: 'red'}}>
                            {error.firebaseError && <span>{error.firebaseError}</span>}
                        </div>
                </form>
            </div>
        </div>        
    )
}

export default LoginComponent;