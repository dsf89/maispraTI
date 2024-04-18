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