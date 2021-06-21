import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const RegisterSuccess = () => {
    return(
        <div className='success-container'>
            <header className="header-success">
                WELL DONE!
            </header>
            <FontAwesomeIcon 
                icon={faCheckCircle} 
                className="success-icon"
            />
            <div className="text-div">
                EVERYTHING IS CORRECT ENJOY YOUR NEW ACCOUNT
            </div>
            <div className="log-div">
                <Link to="/">
                    <FontAwesomeIcon 
                        icon={faSignInAlt}
                        className="btn-login"
                    />
                    <p>LOG IN</p>
                </Link>
            </div>
            <footer>
                Regards Nike Team!
            </footer>        
        </div>
    )
}

export default RegisterSuccess;