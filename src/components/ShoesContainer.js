import React from 'react'
import Shoe from './Shoe'

const ShoesContainer = ( {shoes} ) => {
    return(
        <div className="shoesContainer-shoppingPage">
            {shoes.map(shoe => {
                const {id} = shoe.id;
                const {modelName} = shoe.modelName;
                const {img} = shoe.img;
                const availableSize = shoe.availableSize;
                return(
                    <Shoe {...shoe} />
                )
            })}
        </div>
    )
}
export default ShoesContainer;