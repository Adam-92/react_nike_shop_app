import React,{useEffect,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,} from '@fortawesome/free-solid-svg-icons'
import {UseForm} from './UseForm'
import validate from '../validate'


const LoginComponent = () => {
    const focusInput = useRef('');
    const {inputValue, error,handleSubmit, onChangeValue, removeFields} = UseForm(validate);

    useEffect( () => {
        focusInput.current.focus();
    },[])
    
    return(
        <div className="login-container">
            <header className="header">
                <h1>Login </h1>
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