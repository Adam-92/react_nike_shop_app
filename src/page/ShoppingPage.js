import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import ShoesContainer from '../components/ShoesContainer'
import Counter from '../components/Counter'
import databaseShoes from '../databaseShoes'

const ShoppingPage = () => {
    const [openCounter,setOpenCounter] = useState(false);
    
    return(
        <main className="height-auto-shoppingPage">
            <article className="min-height-shoppingPage">
                <div className="flex-grow-shoppingPage">
                    <header className="header-shoppingPage">
                        <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage"/>
                        <h1>Welcome in Our Shop Julia!</h1>
                        <FontAwesomeIcon icon={faCartArrowDown} className="icon-cart-shoppingPage" onClick={()=>setOpenCounter(!openCounter)}/>
                    </header>
                    <ShoesContainer shoes={databaseShoes} />
                </div>
                <Counter openCounter={openCounter}/>
            </article>
        </main>
    )
}

export default ShoppingPage;