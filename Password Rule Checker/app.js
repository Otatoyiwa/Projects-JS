function hasMinimumLength(password){
    return (password.length === 8)? true : false
} //should return true when the password has at least 8 characters.

function hasNumber(password){
    let num = password.split('');
    return num.some(el => isFinite(el))
} //should return true when the password contains at least one number.

function hasUppercaseLetter(password){
     let alpb = password.split('');
     let res = alpb.filter(el => !isFinite(el))
    return res.some(el => el === el.toUpperCase());
} //should return true when the password contains at least one uppercase letter.

function getFailedRules(password){
    let minimumLength, number, uppercaseLetter;
    minimumLength = (!hasMinimumLength(password))? "minimum length" : '' ;
    number = (!hasNumber(password))? "number" : '' ;
    uppercaseLetter = (!hasUppercaseLetter(password))? "uppercase letter" : '' ;

    return [minimumLength, number, uppercaseLetter].filter(el => el !== '')
} //should return an array of missing rule names.

function validatePassword(password){
    let ft = ((hasMinimumLength(password))&&(hasNumber(password))&&(hasUppercaseLetter(password)));
    let failedRules =  getFailedRules(password)
    let object = {
        valid: ft,
        failedRules
    }
    return JSON.stringify(object) // Just to see result used method

} //should return an object with valid and failedRules.


console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));
