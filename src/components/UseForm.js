import {useState} from 'react'

const UseForm = (validate) => {
   
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
       //return errors from validate(inputValues)
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

    return{
        error,
        inputValue,
        isSubmitting,
        setError,
        setInputValue, 
        handleSubmit, 
        onChangeValue, 
        removeFields
    }
}

export  {UseForm};