import React,{useEffect,useRef} from 'react'
import {UseForm} from './UseForm'
import validate from '../validate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,} from '@fortawesome/free-solid-svg-icons'

const LoginComponent = () => {
    const focusInput = useRef('');
    const {inputValue, error,handleSubmit, onChangeValue, removeFields} = UseForm(validate);

    useEffect( () => {
        focusInput.current.focus();
    },[])
    
    return(
        <div className='login-container'>
            <header className="header">
                <h1>Login </h1>
                <div className="underline"></div>
            </header>
            <div className="form-container">
                <form autoComplete="on">
                        <div className='input-div'>
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
                        <div className='input-div'>
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

export default LoginComponent;