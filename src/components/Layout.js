import React from 'react'
import {useLocation} from 'react-router-dom'
//Import component
import Tabs from './Tabs'
//Import global context
import { useGlobalContext } from '../context/Context'

const Layout = ( {children} ) => {
    const {tabToggle,setTabToggle, tabVisibility} = useGlobalContext()
    //Reference to the tabs container DOM to control the visibility
    const tabRef = React.useRef(null); 
    /*
      Use location to track the pathname and set the proper highlighted tab
      for example. 
      "localhost/login", so tab login should be highlighted
    */
    const location = useLocation();
    
    React.useEffect( () => {
        return  location.pathname === '/register' ? setTabToggle(1)
               :location.pathname === '/login' ? setTabToggle(2)
               : '';
    },[location.pathname, setTabToggle])

    React.useEffect( () =>{
       tabVisibility ? 
          tabRef.current.style.display = "block" 
        : tabRef.current.style.display = "none"
    },[tabVisibility])
    
    return(
        <main className="page">
          <article>
            <section className="img-section">
            </section>
            <section className={`main-section ${!tabVisibility && 'center'}`}>
                {/* If form is filled up correctly and submitted then the tab disappears */}
                <Tabs  tab={tabToggle} ref={tabRef}/>
                {/* Render RegisterComponent/LoginComponent or RegisterSuccess*/}
                {children}
            </section>
         </article>
        </main>
    )
}

export default Layout;