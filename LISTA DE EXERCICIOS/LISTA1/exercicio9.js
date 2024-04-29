// Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:

// Instruções: o usuário deverá informar o código de um produto qualquer, o código deve ser entre 1 e 50

const prompt = require('prompt-sync')();

const codigo = parseInt(prompt('Informe o código de origem do produto entre 1 a 50: '));

let regiao;

switch (codigo) {
    case 1:
        regiao = 'Sul'
        break;
    case 2:
        regiao = 'Norte'
        break;
    case 3:
        regiao = 'Leste'
        break;
    case 4:
        regiao = 'Oeste'
        break;
    case 5:
    case 6:
        regiao = 'Nordeste'
        break
    case 7:
    case 8:
    case 9:
        regiao = 'Sudeste'
        break;
    default:
        if (codigo >= 10 && codigo <= 20) {
            regiao = 'Centro-Oeste'
        } else if (codigo >= 25 && codigo <= 50) {
            regiao = 'Nordeste'
        } else {
            regiao = 'Produto Importado'
        }
        break;
}

console.log(`A região do produto informado é ${regiao}`)