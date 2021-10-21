import {useState} from 'react'

const UseForm = (validate) => {
    //save errors if there is error after submit button - live validation
    const [error, setError] = useState({});
    //changes to true if user click submit (if this is true and there are not errors then try to make firebase acc)
    const [isSubmitting, setIsSubmitting] = useState(false);    
    //inputs values
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
     }
    )
    
    const handleSubmit = (e) =>{
       //dont refresh page
       e.preventDefault();
       //return errors from the validate(inputValues)
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

    return{
        error,
        inputValue,
        isSubmitting,
        setIsSubmitting,
        setError,
        setInputValue, 
        handleSubmit, 
        onChangeValue, 
    }
}

export  {UseForm};