function getOdds(nums) {
    let impares = [];
    impares = nums.filter(number => number % 2 !== 0);
    console.log(impares);
}

getOdds([1,2,3,4,5,6,7,8,9,10]);