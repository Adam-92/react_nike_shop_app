import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ShoesContainer from '../components/ShoesContainer'
import Counter from '../components/Counter'
import databaseShoes from '../databaseShoes'

const ShoppingPage = () => {
    return(
        <main className="height-auto-shoppingPage">
            <article className="min-height-shoppingPage">
                <div className="flex-grow-shoppingPage">
                    <header className="header-shoppingPage">
                        <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage"/>
                        <h1>Welcome in Our Shop Julia!</h1>
                    </header>
                    <ShoesContainer shoes={databaseShoes} />
                </div>
                <Counter />
            </article>
        </main>
    )
}

export default ShoppingPage;