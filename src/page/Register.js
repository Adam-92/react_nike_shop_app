import React from 'react'
import { useGlobalContext } from '../context'
import RegisterComponent from '../components/RegisterComponent'
import Layout from  '../components/Layout'
import RegisterSuccess from '../components/RegisterSuccess'
import LoadingApiResponse from '../components/LoadingApiResponse'

const Register = () => {
    const {isSubmitted, loading} = useGlobalContext();

    if(!isSubmitted && !loading ){
        return(
            <Layout>
                <RegisterComponent />
            </Layout>
        )
    }else if(!isSubmitted && loading){
        return(
            <LoadingApiResponse />
        )
    }else if(isSubmitted){
        return(
            <Layout>
                <RegisterSuccess />
            </Layout>
        )
    }
} 

export default Register