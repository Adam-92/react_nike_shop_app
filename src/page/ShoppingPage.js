import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context' 
import ShoesContainer from '../components/ShoesContainer'
import Cart from '../components/Cart'
import databaseShoes from '../databaseShoes'

const ShoppingPage = () => {
   const {openCartFunc} = useGlobalContext();
    
    return(
        <main className="container-shoppingPage">
            <article className="content-shoppingPage">
                <nav className="nav-shoppingPage">
                    <header className="header-shoppingPage">
                        <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage icon-person-shoppingPage"/>
                        <p className="welcome-shoppingPage">Welcome in Our Shop Julia!</p>
                        <FontAwesomeIcon icon={faCartArrowDown} className="icon-shoppingPage icon-cart-shoppingPage" onClick={openCartFunc}/>
                    </header>
                </nav>
                <ShoesContainer shoes={databaseShoes} />
                <Cart/>
            </article>
        </main>
    )
}

export default ShoppingPage;