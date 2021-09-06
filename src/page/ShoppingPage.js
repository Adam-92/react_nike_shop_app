import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useGlobalContext } from '../context' 
import ShoesContainer from '../components/ShoesContainer'
import Cart from '../components/Cart'

const ShoppingPage = () => {
   const {dataShoes,openCartFunc,cart,openProfile} = useGlobalContext();
   const [logOutBtn, setLogOutBtn] = React.useState(false);
    return(
        <main className="container-shoppingPage">
            <article className="content-shoppingPage">
                <nav className="nav-shoppingPage">
                    <header className="header-shoppingPage">
                        {/*profile*/}
                        <div className="icon-shoppingPage">
                            <FontAwesomeIcon icon={faUserCircle} className="icon-profile-shoppingPage" onClick={()=>setLogOutBtn(!logOutBtn)}/>
                            {logOutBtn && <div className="profile-shoppingPage">
                                            <button>LOG OUT</button>
                                          </div>} 
                        </div>
                        {/*end of profile*/}
                        <p className="welcome-shoppingPage">Welcome in Our Shop Julia!</p>
                        {/*cart*/}
                        <div className="cart-shoppingPage" onClick={openCartFunc}>
                             <FontAwesomeIcon icon={faCartArrowDown} className="icon-cart-shoppingPage" />
                             <p className="shoesInCart-shoppingPage">{cart.length}</p>
                        </div>
                        {/*end of cart*/}
                    </header>
                </nav>
                <ShoesContainer shoes={dataShoes} />
                <Cart/>
            </article>
        </main>
    )
}

export default ShoppingPage;