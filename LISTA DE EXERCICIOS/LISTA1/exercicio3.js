// Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.

// Instruções: o usuário deverá informar quatro números inteiros

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Informe o primeiro número inteiro: '));
let num2 = parseInt(prompt('Informe o segundo número inteiro: '));
let num3 = parseInt(prompt('Informe o terceiro número inteiro: '));
let num4 = parseInt(prompt('Informe o quarto número inteiro: '));

num4 = num1 + num2 + num3;
num1 += 25;
num2 = num2 * 3;
num3 = (num3 / 100) * 12;

console.log(`O primeiro número informado + 25 é ${num1}`);
console.log(`O triplo do segundo número informado é ${num2}`);
console.log(`12% do terceiro número informado é ${num3.toFixed(2)}`);
console.log(`A soma dos 3 primeiros números informado é ${num4}`);

