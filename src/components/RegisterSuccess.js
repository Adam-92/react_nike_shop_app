import React from 'react'
//Import Link to move to the direct route
import {Link} from 'react-router-dom'
//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons'
//Import global context
import {useGlobalContext} from '../context/Context'

//Register success component - loads after successful registeration
const RegisterSuccess = () => {
    const {setTabVisibility, setIsSubmitted} = useGlobalContext();
    
    const hideTabs = () => {
        setTabVisibility(true);
        //Turn off the RegisterSuccess component
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
            <Link to="/login" className="btnContainer-RegisterSuccess" onClick={hideTabs}>
                   <button>GO TO LOGIN</button>
            </Link> 
        </div>
    )
}

export default RegisterSuccess;