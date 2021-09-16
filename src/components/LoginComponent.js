import React,{useEffect,useRef} from 'react'
import {useGlobalContext} from '../context'
import {UseForm} from './UseForm'
import validate from '../validate'
//import loading component
import LoadingApiResponse from './LoadingApiResponse'
//import font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,} from '@fortawesome/free-solid-svg-icons'

const LoginComponent = () => {
    const focusInput = useRef('');
    const {inputValue,isSubmitting,error,setError,handleSubmit, onChangeValue, removeFields} = UseForm(validate);
    const {login,setIsSubmitted,loading,setLoading,setTabVisibility} = useGlobalContext();

    useEffect( () => {
        focusInput.current.focus();
    },[])
    
    //if user pressed the submit and there are no errors carry out asynchronic function signup and make an account in firebase
    useEffect( () => {
        if((Object.values(error).length) === 0 && isSubmitting){
            //turn on loading component
            setLoading(true)
            //turn off tab visibility
            setTabVisibility(false);
            //create firebase acc
            login(inputValue.email, inputValue.password)
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
    console.log(error)
    return(
        <div className='container-LoginComponent'>
            <header className="header-LoginComponent">
            {/*firebaseError display if exist*/}
                {error.firebaseError && <p>{error.firebaseError}</p>}
                <h1>Login </h1>
                <div className="underline-LoginComponent"></div>
            </header>
            <div className="form-LoginComponent">
                <form autoComplete="on">
                        <div className='input-LoginComponent'>
                            <input
                                type='email' 
                                placeholder='mail@gmail.com'
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
                            <div>
                                <button className="btn-LoginComponent" onClick={removeFields}>RESET</button>
                            </div>
                            <div>
                                <button className="btn-LoginComponent" onClick={handleSubmit}>SUBMIT</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>        
    )
}

export default LoginComponent;