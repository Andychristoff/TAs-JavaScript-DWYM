const input = document.getElementById("input");

input.addEventListener("focusin", function(){
    input.style.border = "10px solid black";
});

input.addEventListener("focusout", function(){
    input.style.border = "5px solid lightblue";
});