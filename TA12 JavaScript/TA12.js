function generatePassword(length){
    let constrasena = " ";
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    let caracteres = upperCaseLetters + lowerCaseLetters + numbers + specialChars;
    if (length < 8){
        console.log("El largo de la contraseña debe ser mayor a 8");
        return; 
    }
    for(i = 0; i < length; i++){
        constrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    console.log(constrasena);
    document.body.innerHTML += constrasena;
    return constrasena;
}
generatePassword(9);