function duplicates(nums) {
    let Repetidos = [];
    let numerospasados= [];
    nums.forEach(element => {
        if (!numerospasados.includes(element)){
            numerospasados.push(element);
            return;
        }
        if (!Repetidos.includes(element)){
            Repetidos.push(element);
        }
    });
    document.body.innerHTML += Repetidos.length;
    return Repetidos.length;
}

console.log(duplicates([1,2,3,4,5,2,6,4,8,5,9])) // 2, 4 y 5 están repetidos.