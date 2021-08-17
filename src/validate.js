export default function validate (inputValues){
    let error = {};

    //illegal chars for username,password and email
    const illegalCharsUserPass = /\W/; // allow letters, numbers, and underscores for username
    const illegalCharsEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //username
    if(!inputValues.username){
        error.username = "Please fill the username field";
    }else if(inputValues.username.length < 4 || inputValues.username.length > 26){
        error.username = "Username must have 8-26 characters";
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
    }else if(inputValues.password.length < 4 || inputValues.password.length > 64){
        error.password = "Password must have 8-64 characters";
    }else if(illegalCharsUserPass.test(inputValues.password)){
        error.password = "Please enter valid password. Use only letters, numbers, and underscores"
    }
    //confirm password
    if(!inputValues.confirm_password){
        error.confirm_password = "Please fill the confirm password field";
    }else if(illegalCharsUserPass.test(inputValues.confirm_password)){
        error.confirm_password = "Please enter valid confrim password. Use only letters, numbers, and underscores";
    }else if(inputValues.password !== inputValues.confirm_password){
        error.confirm_password = "The password is not the same";
    }
    
    return error;
}
