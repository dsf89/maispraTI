// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// Instruções: o usuário deverá informar dois valores diferentes

const prompt = require('prompt-sync')();

const valor1 = prompt('Informe o primeiro valor: ');
const valor2 = prompt('Informe o segundo valor: ');

let ordernar = Array(valor1, valor2);
console.log(ordernar.sort());