import React,{useEffect,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUnlockAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {UseForm} from './UseForm'
import validate from '../validate'


const RegisterComponent = () => {
    const focusInput = useRef('');
    const {inputValue, error,handleSubmit, onChangeValue, removeFields} = UseForm(validate);

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