const prompt = require('prompt-sync')();

let tempCelsius = parseInt(prompt('Informe a temperatura em Celsius: '));

console.log('A temperatura informada convertida em fahrenheit é ', tempCelsius * 1.8 + 32);