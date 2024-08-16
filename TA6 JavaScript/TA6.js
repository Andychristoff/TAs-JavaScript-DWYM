function convertToCelsius(temperatura){
    return (((temperatura-32)*5)/9).toFixed(1) + " C";
}

function convertToFahrenheit(temperatura){
    return ((temperatura*(9/5))+32).toFixed(1) + " F";
}

console.log(convertToCelsius(100));    //37.78 aprox
console.log(convertToFahrenheit(100)); //212