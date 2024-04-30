function sumarMatrices(){
    let a11 = parseInt(document.getElementById('a11').value);
    let a12 = parseInt(document.getElementById('a12').value);
    let a21 = parseInt(document.getElementById('a21').value);
    let a22 = parseInt(document.getElementById('a22').value);

    let b11 = parseInt(document.getElementById('b11').value);
    let b12 = parseInt(document.getElementById('b12').value);
    let b21 = parseInt(document.getElementById('b21').value);
    let b22 = parseInt(document.getElementById('b22').value);

    let matrizA = [[a11, a12], [a21,a22]];
    let matrizB = [[b11, b12], [b21,b22]];

    let matrizSumada = [
        [matrizA [0][0] + matrizB [0][0], matrizA [0][1] + matrizB [0][1]],
        [matrizA [1][0] + matrizB [1][0], matrizA [1][1] + matrizB [1][1]]
    ];

    document.getElementById('resultado').innerHTML =
    `Resultado:<br>
    [${matrizSumada[0][0]}, ${matrizSumada[0][1]}]<br>
    [${matrizSumada[1][0]}, ${matrizSumada[1][1]}]`;
}
function restaMatrices(){
    let a11 = parseInt(document.getElementById('a11').value);
    let a12 = parseInt(document.getElementById('a12').value);
    let a21 = parseInt(document.getElementById('a21').value);
    let a22 = parseInt(document.getElementById('a22').value);

    let b11 = parseInt(document.getElementById('b11').value);
    let b12 = parseInt(document.getElementById('b12').value);
    let b21 = parseInt(document.getElementById('b21').value);
    let b22 = parseInt(document.getElementById('b22').value);

    let matrizA = [[a11, a12], [a21,a22]];
    let matrizB = [[b11, b12], [b21,b22]];

    let matrizResta = [
        [matrizA [0][0] - matrizB [0][0], matrizA [0][1] - matrizB [0][1]],
        [matrizA [1][0] - matrizB [1][0], matrizA [1][1] - matrizB [1][1]]
    ];

    document.getElementById('resultado').innerHTML =
    `Resultado:<br>
    [${matrizResta[0][0]}, ${matrizResta[0][1]}]<br>
    [${matrizResta[1][0]}, ${matrizResta[1][1]}]`;
}