import React,{useEffect,useRef} from 'react'
import {useGlobalContext} from '../context'
import {UseForm} from './UseForm'
import validate from '../validate'
//import loading component
import LoadingApiResponse from './LoadingApiResponse'
//import font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUnlockAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'

const RegisterComponent = () => {
    const focusInput = useRef('');
    const {inputValue,isSubmitting, error,setError,handleSubmit, onChangeValue, removeFields} = UseForm(validate);
    const {signup,setIsSubmitted,loading,setLoading,setTabVisibility} = useGlobalContext();
    //ref to foucs input after load web
/*     useEffect( () => {
        focusInput.current.focus();
    },[]) */
    
    //if user pressed the submit and there are no errors carry out asynchronic function signup and make an account in firebase
    useEffect( () => {
        if(Object.values(error).length === 0 && isSubmitting){
            //turn on loading component
            setLoading(true)
            //turn off tab visibility
            setTabVisibility(false);
            //create firebase acc
            signup(inputValue.email, inputValue.password)
            .then( response => {
                console.log(response)
                if(response.user){
                    setLoading(false);
                    setIsSubmitted(true);
                }
            })
            //if there is problem with the createing firebase acc then display message 
            .catch( err => {
                setLoading(false)
                setError({firebaseError : err.message})
            })
        }
    }, [isSubmitting,error])    

    if(loading){
        return(
            <LoadingApiResponse />
        )
    }

    return(
        <div className="register-container">
            <header className="header">
                <h1>Join to our team!</h1>
                <div className="underline"></div>
            </header>
            <div className="form-container">
                <form autoComplete="on">
                        <div className='input-div'>
                            <input
                                type='text' 
                                placeholder='Username'
                                name='username'
                                value={inputValue.username}
                                onChange={(e)=>onChangeValue(e)}
                                ref={focusInput}
                            />
                            <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
                            {error.username ? <p style={{color: 'red'}}>{error.username}</p> : null}   
                        </div>
                        <div className='input-div'>
                            <input
                                type='email' 
                                placeholder='email@gmail.com'
                                name='email'
                                value={inputValue.email}
                                onChange={(e)=>onChangeValue(e)}  
                            />
                            <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                            {error.email ? <p style={{color: 'red'}}>{error.email}</p> : null}   
                        </div>
                        <div className='input-div'>
                            <input
                                type='password' 
                                placeholder='Password'
                                name='password'
                                value={inputValue.password}
                                onChange={(e)=>onChangeValue(e)}  
                            />
                            <FontAwesomeIcon icon={faUnlockAlt} className="icon"></FontAwesomeIcon>
                            {error.password ? <p style={{color: 'red'}}>{error.password}</p> : null}                        
                        </div>     
                        <div className='input-div'>
                            <input
                                type='password' 
                                placeholder='Confirm Password'
                                name='confirm_password'
                                value={inputValue.confirm_password}
                                onChange={(e)=>onChangeValue(e)}  
                            />
                            <FontAwesomeIcon icon={faUnlockAlt} className="icon"></FontAwesomeIcon>
                            {error.confirm_password ? <p style={{color: 'red'}}>{error.confirm_password}</p> : null}                        
                        </div>
                        {/*firebase errors */}
                        {error.firebase}
                    <div className="btn-container">
                        <div>
                            <button className="btn" onClick={removeFields}>RESET</button>
                        </div>
                        <div>
                            <button className="btn" onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default RegisterComponent;