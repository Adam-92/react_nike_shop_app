import React from 'react'
//import Link to move to the direct route
import {Link} from 'react-router-dom'
//import Context
import {useGlobalContext} from '../context/Context'
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons'

const RegisterSuccess = () => {
    //import from Context
    const {setTabVisibility, setIsSubmitted} = useGlobalContext();
    const changeTabPosition = () => {
        //turns on the visibility of tab
        setTabVisibility(true);
        //turn off the RegisterSuccess component, so it's not visiable on /register page
        setIsSubmitted(false)
    }

    return(
        <div className='container-RegisterSuccess'>
            <header>
                <h1>Thank you for the registration</h1>
            </header>
            <div className="iconContainer-RegisterSuccess">
                <FontAwesomeIcon 
                    icon={faCheck}
                    className="iconSuccess-RegisterSuccess"
                />
            </div>
            <Link to="/login" className="btnContainer-RegisterSuccess" onClick={changeTabPosition}>
                   <button>GO TO LOGIN</button>
            </Link> 
        </div>
    )
}

export default RegisterSuccess;