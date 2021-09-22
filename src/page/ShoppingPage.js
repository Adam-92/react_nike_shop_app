import React from 'react'
import { useGlobalContext } from '../context/context' 
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import ShoesContainer from '../components/ShoesContainer'
import Cart from '../components/Cart'

const ShoppingPage = () => {
   const {dataShoes,openCartFunc,cart, currentUser,logout} = useGlobalContext();
   const [logOutBtn, setLogOutBtn] = React.useState(false);
   //create history for switching the route to login page if logout clicked
   const history = useHistory()
   
   //error for gathering info about failed handleLogut
   const [error, setError] = React.useState({});

   //logut function and redirect to login
   const handleLogut = async () => {
        try{
            await logout()
            history.push('/login')
        }catch(err){
            setError({logout:err})
        }
   }

   console.log(currentUser)
    return(
        <main className="container-shoppingPage">
            <article className="content-shoppingPage">
                <nav className="nav-shoppingPage">
                    <header className="header-shoppingPage">
                        {/*profile*/}
                        <div className="icon-shoppingPage">
                            <FontAwesomeIcon icon={faUserCircle} className="icon-profile-shoppingPage" onClick={()=>setLogOutBtn(!logOutBtn)}/>
                            {logOutBtn && <div className="profile-shoppingPage">
                                            <button onClick={handleLogut}>LOG OUT</button>
                                          </div>} 
                        </div>
                        {/*end of profile*/}
                        <p className="welcome-shoppingPage">Welcome {currentUser.email}!</p>
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