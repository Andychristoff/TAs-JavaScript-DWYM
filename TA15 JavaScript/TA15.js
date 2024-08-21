const lista = document.getElementById('lista');
const input = document.getElementById('input');
const botonAgregar = document.getElementById('botonAgregar');
const botonEliminar = document.getElementById('botonEliminar');




botonAgregar.addEventListener("click", function(){
    const texto = input.value;
    let nuevoelemento = document.createElement("li");
    nuevoelemento.textContent = texto;
    lista.appendChild(nuevoelemento);
    input.value = "";
});


botonEliminar.addEventListener("click", function(){
    lista.lastChild.remove();
});