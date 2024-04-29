// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0

// Instruções: este é apenas um complemento ao exercício anterior

const prompt = require('prompt-sync')();

const nota1 = parseInt(prompt('Informe a nota da primeira prova: '));
const nota2 = parseInt(prompt('Informe a nota da segunda prova: '));

const media = (nota1 + nota2) / 2; 

if (media >= 6) {
    console.log(`Sua média semestral é ${media}. PARABÉNS! Você foi aprovado(a)`);
} else {
    console.log(`Sua média semestral é ${media}. Você foi REPROVADO! Estude mais!`);
}