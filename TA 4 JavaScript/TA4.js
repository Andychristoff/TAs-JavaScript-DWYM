function sumAll(a, b){
    let x = 0;
    let y = a;
    while(y <= b){
        x += y;
        y++;
    }
    console.log(" El resultado de la sume fue: " + x);
    document.body.innerHTML += " El resultado de la suma fue: " + x;
}

sumAll(1,5);