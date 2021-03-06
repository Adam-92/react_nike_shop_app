import React from  'react'
import {Link} from 'react-router-dom'

//Tabs component Register/Login
const Tabs = ( { tab }, ref ) => {
    return(
        <div className="container-Tabs" ref={ref}>
            <div className="Tabs">
                {/*Add class toggle to change the position of the lighted up tab*/}
                <div className={`btn-color-Tabs ${tab === 2 ? 'toggle-Tabs' : ''}`}></div>
                <Link to="/register" className="btn-Tabs">
                    Register
                </Link>
                <Link to="/login" className="btn-Tabs">
                    Login
                </Link>
            </div>
        </div>
    )
}
//Forward the refrence of container-Tabs div so you can control the visibility of it
const forwardedRef = React.forwardRef(Tabs);
export default forwardedRef;