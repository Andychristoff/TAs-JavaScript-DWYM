const formulario = document.getElementById("form");
const contra = document.getElementById("contra");
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío automático del formulario
    document.getElementById("errorContra").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorNombre").textContent = "";

    let correo = true;
    let contra = true;
    let nombre = true;

    if(formulario.correo.value =='' ){
        document.getElementById("errorCorreo").textContent = "*El correo es obligatorio";
        correo = false;
    }if(formulario.nombre.value ==''){
        document.getElementById("errorNombre").textContent = "*El nombre es obligatorio";
        nombre = false;
    }if( formulario.contra.value==''){
        document.getElementById("errorContra").textContent = "*No ingreso contrasena o tiene menos de 8 caracteres";
        contra = false;
    }if( formulario.contra.value.length < 8){
        document.getElementById("errorContra").textContent = "*No ingreso contrasena o tiene menos de 8 caracteres";
        contra = false;
    }
    if(contra && nombre && correo){
        alert('Formulario enviado correctamente');
        formulario.submit();
    }
});
