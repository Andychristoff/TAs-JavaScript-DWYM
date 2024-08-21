function leapYears(año){
    if((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)){
        return true;
    } else{
        return false;
    }
}
console.log(leapYears(2024)); //true
console.log(leapYears(2023)); //false
console.log(leapYears(1900)); //false
console.log(leapYears(2000)); //true
