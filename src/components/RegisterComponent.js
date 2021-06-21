import React,{useEffect,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUnlockAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {UseForm} from './UseForm'
import validate from '../validate'

const RegisterComponent = () => {
    const {inputValue, error,handleSubmit, onChangeValue, removeFields} = UseForm(validate);
    const focusInput = useRef('');
    
    useEffect( () => {
        focusInput.current.focus();
    },[])

    return(
        <div className="register-container">
            <header className="header">
                <h1>Join to our team!</h1>
                <div className="underline"></div>
            </header>
            <div className="form-container">
                <form autoComplete="off">
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
                                name='confirmPassword'
                                value={inputValue.confirmPassword}
                                onChange={(e)=>onChangeValue(e)}  
                            />
                            <FontAwesomeIcon icon={faUnlockAlt} className="icon"></FontAwesomeIcon>
                            {error.confirmPassword ? <p style={{color: 'red'}}>{error.confirmPassword}</p> : null}                        
                        </div>
                    <div className="btn-container">
                        <div className="btn-div">
                            <button className="btn" onClick={removeFields}>RESET</button>
                        </div>
                        <div className="btn-div">
                            <button className="btn" onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default RegisterComponent;