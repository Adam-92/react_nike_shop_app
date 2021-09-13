import React from  'react'
import {Link} from 'react-router-dom'

//tabs component for switching between pages REGISTER and LOGIN
const Tabs = ( {tab,switchTab}, ref ) => {
    return(
        <div className="tabs-container" ref={ref} >
            <div className={`tab-btn-color ${tab && 'toggle'}`}></div>
            <Link to="/register" className="tab-btn" onClick={() => switchTab(!tab)}>
                Register
            </Link>
            <Link to="/login" className="tab-btn" onClick={() => switchTab(!tab)}>
                Login
            </Link>
        </div>
    )
}
//forward the refrence of tabs-container div so you can control the visibility of it
const forwardedRef = React.forwardRef(Tabs);
export default forwardedRef;