// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// Instruções: o usuário deverá informar o número de maçãs compradas

const prompt = require('prompt-sync')();

const apple = parseInt(prompt('Insira a quantidade de maçãs compradas: '));

if (apple < 12) {
    console.log(`o valor total das maçãs foi R$ ${(apple * 0.30).toFixed(2)}`);
} else {
    console.log(`o valor total das maçãs foi R$ ${(apple * 0.25).toFixed(2)}`);
}