function suma (num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

function par (num){
    document.write(num % 2 == 0? "Par" : "Impar");
}

function multiplo (num1, num2){
    num1 = prompt("Dime un numero");
    num2 = prompt("Dime otro numero para dividirlo con el anterior");
    document.write(num1 % num2 == 0? "Es multiplo" : "No es multiplo");
}

function mayor (num1, num2){
    num1 = prompt("Dime un numero");
    num2 = prompt("Dime otro numero");
    document.write(num1 > num2? (num1 + "Es mayor") : (num2 + "Es mayor"));
}

function palabra (frase){
    let palabras = new Array;
    let palabraslargas = new Array;
    palabras = frase.split(" ");
    for(i = 0; i < palabras.length; i++){
        if(palabras[i].length >= 3)
            palabraslargas.push(palabras[i]);
    }
    document.write(palabraslargas);
}