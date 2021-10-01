import React from 'react'
import {useLocation} from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Tabs from './Tabs'

const Layout = ( {children} ) => {
    //import from Context
    const {tabToggle,setTabToggle, tabVisibility} = useGlobalContext()
    
    //reference to tabs container DOM to control the visibility
    const tabRef = React.useRef(null); 

    //useLocation
    const location = useLocation();
    console.log(location)
    console.log(tabToggle)
    React.useEffect( () => {
        return  location.pathname === '/' ? setTabToggle(1)
               :location.pathname === '/register' ? setTabToggle(1)
               :location.pathname === '/login' ? setTabToggle(2)
               : '';
    },[])

    React.useEffect( () =>{
       tabVisibility ? 
            tabRef.current.style.display = "flex" 
          : tabRef.current.style.display = "none";
    },[tabVisibility])
    

    return(
        <main className="page">
          <article>
            <section className="img-section">
                {/*left section -> photo nike*/}
            </section>
            <section className={`main-section ${!tabVisibility && 'center'}`}>
                {/*if form is filled up correctly and submitted then tab disappears */}
                <Tabs  tab={tabToggle} ref={tabRef}/>
                {/*render register RegisterComponent/LoginComponent or RegisterSuccess*/}
                {children}
            </section>
         </article>
        </main>
    )
}

export default Layout;