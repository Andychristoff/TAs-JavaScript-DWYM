
function removeFromArray(array ,item){
    if(array.includes(item)){
        indice = array.indexOf(item);
        array.splice(indice, 1);
    }
    console.log(array);
    document.body.innerHTML += array.join(", ");
} 

removeFromArray(["Andy", "Mili", "Leo"], "Leo");