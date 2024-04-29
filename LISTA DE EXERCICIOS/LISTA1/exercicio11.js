// Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.

// Instruções: o usuário deverá informar a quantidade de valores inteiros que desejar

const prompt = require('prompt-sync')();

let valor = parseInt(prompt('Informe um valor inteiro: '))

while (valor >= 0) {
    if (valor % 2 === 0) {
        console.log(valor, ' é par')
    } else {
        console.log(valor, ' é ímpar')
    }
    valor = parseInt(prompt('Informe um valor inteiro: '))
}