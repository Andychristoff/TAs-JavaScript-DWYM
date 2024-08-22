const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", function() {
    imagen.src = "PoatanHTML.jpg";
    imagen.style.width = "550px";
    imagen.style.height = "800px";
});


imagen.addEventListener("mouseout", function() {
    imagen.src = "alex-pereira.jpg";
    imagen.style.width = "auto";
    imagen.style.height = "auto";
});