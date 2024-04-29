// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit

// Instruções: o usuário deverá informar uma temperatura qualquer em Celsius para que o algoritimo faça a conversão


const prompt = require('prompt-sync')();

let tempCelsius = parseInt(prompt('Informe a temperatura em Celsius: '));

console.log('A temperatura informada convertida em fahrenheit é ', tempCelsius * 1.8 + 32);