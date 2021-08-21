import React from 'react'

const Counter = ( {openCounter} ) => {
    return(
        <div className={`container-counter ${openCounter && 'show-counter'}`}>
            TIME TO COUNT
        </div>
    )
}

export default Counter;