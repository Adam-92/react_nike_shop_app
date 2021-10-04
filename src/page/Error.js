import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Error = ( {text}) =>{
    return(
        <main className="error-container">
            <header>
                <h1>{text}</h1>
            </header>
            <Link to="/">
                <FontAwesomeIcon 
                icon={faArrowCircleLeft}
                className="btn-back"
                />
            </Link>
         </main>
    )
}


export default Error; 