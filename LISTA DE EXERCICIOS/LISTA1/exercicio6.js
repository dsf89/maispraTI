const prompt = require('prompt-sync')();

const ladoA = parseInt(prompt('Informe o comprimento do lado A: '))
const ladoB = parseInt(prompt('Informe o comprimento do lado B: '))
const ladoC = parseInt(prompt('Informe o comprimento do lado C: '))

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log('É possível formar um triângulo com as medidas informadas.')

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Formou um triângulo eqüilátero.');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('Formou um triângulo isósceles.');
    } else {
        console.log('Formou um triângulo escaleno.');
    }
}

else {
    console.log('Não é possível formar um triângulo com as medidas informadas.');
}