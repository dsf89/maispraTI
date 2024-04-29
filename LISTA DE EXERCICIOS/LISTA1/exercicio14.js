// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// Instruções: o usuário deverá informar a quantidade de números que desejar

let soma = 0;
let quantidadeNumeros = 0;

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar): "));

while (numero != 0) {
    if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número decimal.");
        numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar): "));
        continue;
    }

    soma += numero;
    quantidadeNumeros++;

    numero = prompt("Digite um número decimal (ou 0 para finalizar): ");
}

if (quantidadeNumeros === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    let media = soma / quantidadeNumeros;
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
}