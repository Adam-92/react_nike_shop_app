import React from 'react'
//Loading component
const LoadingApiResponse = ( {text}) =>{
    return(
        <div className="container-loadingApiResponse">
            <div className="loader-loadingApiResponse"></div>
            <h1 className="comunication-loadingApiResponse">{text}</h1>
        </div>
    )
}

export default LoadingApiResponse;