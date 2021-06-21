export default function validate (inputValues){
    let error = {};

    //illegal chars for username,password and email
    const illegalCharsUserPass = /\W/; // allow letters, numbers, and underscores for username
    const illegalCharsEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //username
    if(!inputValues.username){
        error.username = "Please fill the username field";
    }else if(inputValues.username.length < 5 || inputValues.username.length > 15){
        error.username = "Username must have 5-15 characters";
    }else if (illegalCharsUserPass.test(inputValues.username)) {
        error.username = "Please enter valid Username. Use only letters, numbers, and underscores";
    }  
    
    //email
    if(!inputValues.email){
        error.email = 'Please fill the email field';
    }else if(!illegalCharsEmail.test(inputValues.email)){
        error.email = 'You have entered an invalid email address!';
    }
    
    //password
    if(!inputValues.password){
        error.password = "Please fill the password field";
    }else if(illegalCharsUserPass.test(inputValues.password)){
        error.password = "Please enter valid password. Use only letters, numbers, and underscores"
    }
    //confirm password
    if(!inputValues.confirmPassword){
        error.confirmPassword = "Please fill the confrim password field";
    }else if(illegalCharsUserPass.test(inputValues.confirmPassword)){
        error.confirmPassword = "Please enter valid confrim password. Use only letters, numbers, and underscores";
    }else if(inputValues.password !== inputValues.confirmPassword){
        error.confirmPassword = "The password is not the same";
    }
    
    return error;
}
