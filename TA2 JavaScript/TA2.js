function reverseString(texto){
    let text = texto.split("").reverse().join("")
    console.log(text)
    document.body.innerHTML += text
}

reverseString("ffotsirhC serdnA");