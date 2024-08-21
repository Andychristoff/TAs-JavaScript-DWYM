const lista = document.getElementById('lista');
const input = document.getElementById('input');
const boton = document.getElementById('boton');



boton.addEventListener("click", function(){
    const texto = input.value;
    let nuevoelemento = document.createElement("li");
    nuevoelemento.textContent = texto;
    lista.appendChild(nuevoelemento);
    input.value = "";
});