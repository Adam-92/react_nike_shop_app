import React,{useEffect, useState} from 'react'
import { useGlobalContext } from '../context/Context' 
import { useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import font icons
import { faUserCircle,faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
//import ShoesContainer component
import ShoesContainer from '../components/ShoesContainer'
//import Cart component
import Cart from '../components/Cart'
//import Error Page
import Error from './Error'


const ShoppingPage = () => {
   //import from Context
   const {setOpenCart,cart,currentUser,logout,loading,fetchData,error,setError,data} = useGlobalContext()
   //logout btn show/hide state
   const [logOutBtn, setLogOutBtn] = useState(false)
   //create history for switching the route to login page if logout clicked
   const history = useHistory()

   useEffect( () => {
        fetchData()
   },[])

   console.log(error)
   console.log(loading);
   console.log(data)

   //logut function and redirect to login
   const handleLogut = async () => {
        try{
            await logout()
            history.push('/login')
        }catch(err){
            setError({...error,logout:err})
        }
   }
   


   if(error.fetch){
       return(
         <Error text='Sorry but there is an issue, please try later...'/>
    )
   }
   
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
                        <div className="cart-shoppingPage" onClick={()=>setOpenCart(true)}>
                             <FontAwesomeIcon icon={faCartArrowDown} className="icon-cart-shoppingPage" />
                             <p className="shoesInCart-shoppingPage">{cart.length}</p>
                        </div>
                        {/*end of cart*/}
                    </header>
                </nav>
                <ShoesContainer shoes={data} />
                <Cart/>
                {error.logut && 
                        <div style={{margin: '1em',color: 'red'}}>
                            <span>{error.logut}</span>        
                        </div>}
            </article>
        </main>
    )
}

export default ShoppingPage;