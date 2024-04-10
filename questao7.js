/*
Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal.
*/

function verificarSimetriaDiagonalPrincipal(matriz) {
    
    if (matriz.length !== 3 || matriz[0].length !== 3) {
        return false;
    }

    for (var i = 0; i < matriz.length; i++) {
        for (var j = i + 1; j < matriz[i].length; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                return false;
            }
        }
    }
    
    return true;
}

var matrizSimetrica = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

var matrizNaoSimetrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("A matriz simétrica é simétrica em relação à sua diagonal principal? " + verificarSimetriaDiagonalPrincipal(matrizSimetrica));
console.log("A matriz não simétrica é simétrica em relação à sua diagonal principal? " + verificarSimetriaDiagonalPrincipal(matrizNaoSimetrica));
