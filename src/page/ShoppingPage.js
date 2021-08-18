import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ShoesContainer from '../components/ShoesContainer'

const ShoppingPage = () => {
    return(
        <main>
            <article className="background-shoppingPage">
                <header className="header-shoppingPage">
                    <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage"/>
                    <h1>Welcome back Julia!</h1>
                </header>
                <ShoesContainer/>
            </article>
        </main>
    )
}

export default ShoppingPage;