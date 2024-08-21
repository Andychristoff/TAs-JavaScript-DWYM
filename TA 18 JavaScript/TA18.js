const lista = document.getElementById('lista');
const input = document.getElementById('input');

const persons = [
    'Juan Pérez',
    'María García',
    'Pedro Rodríguez',
    'Jose Sánchez',
    'Carlos Gómez',
    'Luisa Fernández',
    'Miguel Ortiz',
    'Sofía Ramírez',
    'Luis Castillo',
    'Carla Alvarado'
  ];

/*
  Codigo para ocultar un elemento, "=block" para mostrar, "=none" para ocultar

  if (parrafo.style.display === "none") {
    parrafo.style.display = "block";
} else {
    parrafo.style.display = "none";
}
*/

function mostrarLista(personas){
    lista.innerHTML = '';
    personas.forEach(person =>{
        let nodoLista = document.createElement('li');
        nodoLista.textContent = person;
        lista.appendChild(nodoLista);
    });
}

mostrarLista(persons);

input.addEventListener("input", function(){
    let textoActual = input.value.toLowerCase();
    let personasFiltradas = persons.filter(person => person.toLowerCase().includes(textoActual));
    mostrarLista(personasFiltradas);
});