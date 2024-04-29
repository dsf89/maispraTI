//  Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

// Instruções: o usuário deverá informar um número inteiro

const prompt = require('prompt-sync')();

const num = parseInt(prompt('Informe um número inteiro: '));

for (let i = 0; i < 10; i++) {
    console.log(num)
}