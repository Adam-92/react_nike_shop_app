import {useState} from 'react'

const UseForm = (validate) => {
    //js validation if the form is not filled correctly
    const [error, setError] = useState({});
    //changes to true if user click submit (if this is true and there are not errors then try to make firebase acc)
    const [isSubmitting, setIsSubmitting] = useState(false);    
    //inputs value
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
        setIsSubmitting,
        setError,
        setInputValue, 
        handleSubmit, 
        onChangeValue, 
        removeFields
    }
}

export  {UseForm};