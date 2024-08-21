function getSum(nums) {
    let sumanumeros = 0;
    sumanumeros = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sumanumeros);
    document.body.innerHTML += sumanumeros;
    return sumanumeros;
}

getSum([1,2,3,4,5,6,7,8,9,10]); //55

