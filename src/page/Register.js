import React from 'react'
import { useGlobalContext } from '../context'
import RegisterComponent from '../components/RegisterComponent'
import Layout from  '../components/Layout'
import RegisterSuccess from '../components/RegisterSuccess'

const Register = () => {
    const {isSubmitted} = useGlobalContext();

    if(!isSubmitted){
        return(
            <Layout>
                <RegisterComponent />
            </Layout>
        )
    }else{
        return(
            <Layout>
                <RegisterSuccess />
            </Layout>
        )
    }

} 

export default Register