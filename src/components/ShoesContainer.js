import React from 'react'
import Shoe from './Shoe'

//Container for shoes
const ShoesContainer =( {shoes} ) => {

    return(
        <div className="container-shoesContainer">
            {shoes.map(shoe => {
                const id = shoe.id;
                return(
                    <Shoe {...shoe} key={id} />
                )
            })}
        </div>
    )
}
export default ShoesContainer;