import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const RegisterSuccess = () => {
    
    const {setTabVisibility ,setTab, setIsSubmitted} = useGlobalContext();
    const changeTabPosition = () => {
        //turns on the visibility of tab
        setTabVisibility(true);
        //move the position, so LOGIN tab is marked
        setTab(true);
        //turn off the RegisterSuccess component, so it's not visiable on /register page
        setIsSubmitted(false)
    }

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
                <Link to="/login" onClick={changeTabPosition}>
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