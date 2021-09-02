import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context' 
import ShoesContainer from '../components/ShoesContainer'
import Cart from '../components/Cart'

const ShoppingPage = () => {
   const {dataShoes,openCartFunc,cart,openProfile} = useGlobalContext();
    
    return(
        <main className="container-shoppingPage">
            <article className="content-shoppingPage">
                <nav className="nav-shoppingPage">
                    <header className="header-shoppingPage">
                        <div>
                            <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage icon-profile-shoppingPage" onClick={openProfile}/>
                            <div className="profile-shoppingPage">
                                <p>padls</p>
                            </div>
                        </div>
                        <p className="welcome-shoppingPage">Welcome in Our Shop Julia!</p>
                        <FontAwesomeIcon icon={faCartArrowDown} className="icon-shoppingPage icon-cart-shoppingPage" onClick={openCartFunc}/>
                        <p className="shoesInCart-shoppingPage">{cart.length}</p>
                    </header>
                </nav>
                <ShoesContainer shoes={dataShoes} />
                <Cart/>
            </article>
        </main>
    )
}

export default ShoppingPage;