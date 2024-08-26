export const checkValidation = (email,password) =>{
    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password);

    if(!isEmail) return "email id is invalid" ;
    if(!isPassword) return "password is in valid" ;

    return null;


}