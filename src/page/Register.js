import React from 'react'
//Import components
import RegisterComponent from '../components/RegisterComponent'
import Layout from  '../components/Layout'
import RegisterSuccess from '../components/RegisterSuccess'
//Import global context
import { useGlobalContext } from '../context/Context'

//Page - register
const Register = () => {
    const {isSubmitted} = useGlobalContext();

    if(isSubmitted){
        return(
            <Layout>
                <RegisterSuccess />
            </Layout>
        )
    }else{
        return(
            <Layout>
                <RegisterComponent />
            </Layout>
        )
    }
} 

export default Register