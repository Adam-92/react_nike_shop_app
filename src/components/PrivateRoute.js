import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//Import global context
import { useGlobalContext} from '../context/Context'
//Private route function, to secure the chosen route
export default function PrivateRoute( {component: Component, ...rest}) {
    const {currentUser} = useGlobalContext()

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
