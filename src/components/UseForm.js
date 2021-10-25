import {useState} from 'react'

const UseForm = (validate) => {
    //Save errors - live validation after click on submit
    const [error, setError] = useState({});
    //If true and no errors try to Login(firebase) or Register(firebase) async
    const [isSubmitting, setIsSubmitting] = useState(false);    
    //Inputs values
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
     }
    )
 
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

    const handleSubmit = (e) =>{
        //Dont refresh page
        e.preventDefault()
        //Return errors from the validate(inputValues)
        setError(validate(inputValue))
        setIsSubmitting(true)
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