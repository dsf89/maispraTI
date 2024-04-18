const prompt = require('prompt-sync')();

const valor1 = prompt('Informe o primeiro valor: ');
const valor2 = prompt('Informe o segundo valor: ');

let ordernar = Array(valor1, valor2);
console.log(ordernar.sort());