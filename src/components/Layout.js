import React from 'react'
import { useGlobalContext } from '../context'
import Tabs from './Tabs'

const Layout = ( {children} ) => {
    const {tab, setTab,tabVisibility} = useGlobalContext(); 
    const tabRef = React.useRef(null);
    
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
            <section className="main-section">
                {/*if form is filled up correctly and submitted then tab disappears */}
                <Tabs  tab={tab} switchTab={setTab} ref={tabRef}/>
                {/*render register RegisterComponent/LoginComponent or RegisterSuccess*/}
                {children}
            </section>
         </article>
        </main>
    )
}

export default Layout;