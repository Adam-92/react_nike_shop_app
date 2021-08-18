import React from 'react'
import { useGlobalContext } from '../context'
import Tabs from './Tabs'

const Layout = ( {children} ) => {
    
    const {tab,switchTab} = useGlobalContext(); 

    return(
        <main className="page">
          <article>
            <section className="img-section">
                {/*left section -> photo nike*/}
            </section>
            <section className="main-section">
                <Tabs 
                    tab={tab} 
                    switchTab={switchTab}
                />
                {children}
            </section>
         </article>
        </main>
    )
}

export default Layout;