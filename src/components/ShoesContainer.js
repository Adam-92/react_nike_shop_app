import React from 'react'
import Shoe from './Shoe'

const ShoesContainer = ( {shoes} ) => {
    const allDomShoes = React.createRef();

    React.useEffect( () => {
       
    },[allDomShoes])

    return(
        <div className="container-shoesContainer">
            {shoes.map(shoe => {
                const id = shoe.id;
                return(
                    <Shoe {...shoe} key={id} ref={allDomShoes}/>
                )
            })}
        </div>
    )
}
export default ShoesContainer;