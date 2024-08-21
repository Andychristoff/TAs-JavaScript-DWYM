const boton = document.getElementById("boton");
const numero = document.getElementById("numero");

boton.addEventListener("click", function(){
    let num = parseInt(numero.textContent);
    num++;
    numero.textContent = num;
})