
function repeatString(texto, repeticiones){
    while (repeticiones > 0){
        console.log(texto + repeticiones);
        document.body.innerHTML += texto + repeticiones + "<br>"; 
        repeticiones--;
    }
}

repeatString("Hola mundo ", 5);