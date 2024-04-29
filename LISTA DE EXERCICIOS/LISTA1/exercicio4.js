// Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).

// Instruções: o usuário deverá informar as notas de duas avalições de um aluno qualquer no semestre

const prompt = require('prompt-sync')();

const nota1 = parseInt(prompt('Informe a nota da primeira prova: '));
const nota2 = parseInt(prompt('Informe a nota da segunda prova: '));

const media = (nota1 + nota2) / 2; 

if (media >= 6) {
    console.log(`Sua média semestral é ${media}. PARABÉNS! Você foi aprovado(a)`);
} else {
    console.log(`Sua média semestral é ${media}. Você foi REPROVADO! Estude mais!`);
}
