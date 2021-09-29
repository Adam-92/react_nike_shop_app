import React from 'react'
import { useGlobalContext } from '../context/context'
import Tabs from './Tabs'

const Layout = ( {children} ) => {
    //import from Context
    const {tab, setTab, tabVisibility} = useGlobalContext()
    
    //reference to tabs container DOM to control the visibility
    const tabRef = React.useRef(null);    
    React.useEffect( () =>{
       tabVisibility ? 
            tabRef.current.style.display = "flex" 
          : tabRef.current.style.display = "none";
    },[tabVisibility])
    
    //lights up the correct tab according to address :/login or :/register
    React.useEffect( () => {
        children.type.name === 'RegisterComponent' ? setTab(false) : setTab(true)
    },[])

    return(
        <main className="page">
          <article>
            <section className="img-section">
                {/*left section -> photo nike*/}
            </section>
            <section className={`main-section ${!tabVisibility && 'center'}`}>
                {/*if form is filled up correctly and submitted then tab disappears */}
                <Tabs  tab={tab} ref={tabRef}/>
                {/*render register RegisterComponent/LoginComponent or RegisterSuccess*/}
                {children}
            </section>
         </article>
        </main>
    )
}

export default Layout;