const parrafo = document.getElementById("parrafo");

window.addEventListener("resize", function(){
    parrafo.textContent = "El tamano de la ventana es:" + window.innerHeight +" x " + window.innerWidth;
    console.log(parrafo.textContent);
});