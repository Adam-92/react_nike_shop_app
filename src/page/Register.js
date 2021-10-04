import React from 'react'
import { useGlobalContext } from '../context/Context'
import RegisterComponent from '../components/RegisterComponent'
import Layout from  '../components/Layout'
import RegisterSuccess from '../components/RegisterSuccess'

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