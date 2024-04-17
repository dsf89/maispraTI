const prompt = require('prompt-sync')();

const apple = parseInt(prompt('Insira a quantidade de maçãs compradas: '));

if (apple < 12) {
    console.log(`o valor total das maçãs foi R$ ${(apple * 0.30).toFixed(2)}`);
} else {
    console.log(`o valor total das maçãs foi R$ ${(apple * 0.25).toFixed(2)}`);
}