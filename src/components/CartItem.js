import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const CartItem = ({img, modelName,price,id}) => {
    return(
        <div className="container-cartItem">
            <div className="picture-cartItem">
                <img 
                     src='https://www.eobuwie.com.pl/media/catalog/product/cache/image/800x800/0/0/0000207047051_01_ki.jpg'>
                </img>
            </div>
            <div className="name-cartItem">
                <p>Quest 2 CI3787 009 Smoke Grey/Dk</p>
                <p className="price-cartItem">
                    100$
                </p>
            </div>

            <div className="quantity-cartItem">                
                <FontAwesomeIcon icon={faChevronLeft}/>
                    <p>0</p>
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
        </div>
    )
}

export default CartItem;