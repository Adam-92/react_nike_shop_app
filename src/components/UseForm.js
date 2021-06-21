import { useState,useEffect} from 'react'
import { useGlobalContext } from '../context';

const UseForm = (validate) => {
    const {submitedForm} = useGlobalContext();

    const [error, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);    
    const [inputValue, setInputValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            confirmPassword: '',
        })
        setError(false);
        setIsSubmitting(false);
    }
    
    useEffect( () => {
       if(Object.values(error).length === 0 && isSubmitting){
           submitedForm();
       }
    }, [error,submitedForm,isSubmitting])

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