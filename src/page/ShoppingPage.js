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
                <div className="flex-grow-shoppingPage">
                    <header className="header-shoppingPage">
                        <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage"/>
                        <h1>Welcome in Our Shop Julia!</h1>
                        <FontAwesomeIcon icon={faCartArrowDown} className="icon-cart-shoppingPage" onClick={openCartFunc}/>
                    </header>
                    <ShoesContainer shoes={databaseShoes} />
                </div>
                <Cart/>
            </article>
        </main>
    )
}

export default ShoppingPage;