import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';

const Shoe = ( {id,modelName,price,availableSize,img}) =>{
    //Show icon while on MouseMove 
    const [showPickIcon,setShowPickIcon] = useState(false);
    console.log(showPickIcon);
    return(
        <div className="container-shoe" onMouseOver={()=>{setShowPickIcon(true)}}>
            
            <div className="img-shoe">
                <img src={img}></img>
            </div>
            <div>
                <h3 className="name-shoe">
                    {modelName}
                </h3>
            </div>
            <div className="information-shoe">
                <p>Size: {availableSize}</p>
                <p>Price: {price}$</p>
            </div>
            <div className="animation-shoe">
                <FontAwesomeIcon icon={faHandPointUp} />
            </div> 
        </div>
    )
}

export default Shoe;