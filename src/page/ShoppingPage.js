import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ShoesContainer from '../components/ShoesContainer'
import databaseShoes from '../databaseShoes'

const ShoppingPage = () => {
    
   /*  const [databaseShoes, setDatabaseShoes ] = useState([]);
    useEffect( () => {
        //example of fetch, of course in this example url is just a local path
        try{
            const url ='../databaseShoes';
            const data = fetch(url);
            const response = data.json();;

        }catch(){

        }
    }, []) */
    return(
        <main>
            <article className="background-shoppingPage">
                <header className="header-shoppingPage">
                    <FontAwesomeIcon icon={faUserCircle} className="icon-shoppingPage"/>
                    <h1>Welcome back Julia!</h1>
                </header>
                <ShoesContainer shoes={databaseShoes}/>
            </article>
        </main>
    )
}

export default ShoppingPage;