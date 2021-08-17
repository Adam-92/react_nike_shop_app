import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';

const UseForm = (validate) => {
    const {submitedForm,turnOnLoading} = useGlobalContext();
    
    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);    
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
     }
    )
    
    const handleSubmit = (e) =>{
       e.preventDefault();
       setError(validate(inputValue));
       setIsSubmitting(true);
    }

    const onChangeValue = (e) => {
        if(error[e.target.name]){
             setError({
                 ...error,
                 [e.target.name] : ''
             })
        }
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value  
         });
    }

    const removeFields = (e) => {
        e.preventDefault();
        setInputValue({
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        })
        setError({});
        setIsSubmitting(false);
    }

    const getLocalStorage = () => {
        return localStorage.getItem('Users') ? JSON.parse(localStorage.getItem('Users')) : [] ;
    }

    const saveLocalStorage = (username, password) => {
        //Get database and check if it's empty
        let database = getLocalStorage();
        database.push({
            User: username,
            Pass: password
        })
        //Put back into localStorage updated database
        localStorage.setItem('Users', JSON.stringify(database))
    }


    useEffect( () => {
        if(Object.values(error).length === 0 && isSubmitting){
            turnOnLoading();
            setTimeout( () => {
                saveLocalStorage(inputValue.username, inputValue.password);
                submitedForm();
            }, 3000)
        }
    }, [isSubmitting])

    return{
        error,
        inputValue,
        setInputValue, 
        handleSubmit, 
        onChangeValue, 
        removeFields
    }
}

export  {UseForm};