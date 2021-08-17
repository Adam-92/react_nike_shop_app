import React from  'react'
import {Link} from 'react-router-dom'

const Tabs = ( {tab, switchTab} ) => {
    return(
    <div className="tabs-container">
        <div className={`tab-btn-color ${tab && 'toggle'}`}></div>
        <Link to="/register" className="tab-btn" onClick={switchTab}>
            Register
        </Link>
        <Link to="/login" className="tab-btn" onClick={switchTab}>
            Login
        </Link>
    </div>
    )
}

export default Tabs;