import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useGlobalContext} from '../context/context'

export default function PrivateRoute( {component: Component, ...rest}) {
    const {currentUser} = useGlobalContext()
    //If the current user has been fetched and is true, then opens up the shoppingPage
    return (
        <Route 
            {...rest}
            render={props =>{
                return currentUser ? <Component {...props} /> : <Redirect to='/login' />
            }}
        >
        </Route>
    )
}
