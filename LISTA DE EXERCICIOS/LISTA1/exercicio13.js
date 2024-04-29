// Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N

// Instruções: o usuário deverá informar 5 valores

let numList = Array();

for (i = 0; i < 5; i++) {
    const prompt = require('prompt-sync')();
    let valores = parseInt(prompt(`Digite o valor ${i + 1}: `));
    numList[i] = valores;

    for (let j = 1; j <= valores; j++) {
        console.log('A tabuada de', j, ' x ', valores, ' = ', j * valores);
    }
}