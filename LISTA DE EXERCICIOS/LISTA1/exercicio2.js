// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores

// Instruções: o usuário deverá informar o número de eleitores, o número de votos em brancos, nulos e válidos para que o algoritmo possa calcular e apresentar os percentuais

const prompt = require('prompt-sync')();

const eleitores = parseInt(prompt('Informe a quantidade de eleitores: '));
const votosBranco = parseInt(prompt('Informe a quantidade de votos brancos: '));
const votosNulo = parseInt(prompt('Informe a quantidade de votos nulos: '))
const votosValidos = parseInt(prompt('Informe a quantidade de votos válidos: '));

const totalVotos = votosBranco + votosNulo + votosValidos;

const brancos = (votosBranco / totalVotos) * 100;
const nulos = (votosNulo / totalVotos) * 100;
const validos = (votosValidos / totalVotos) * 100;

console.log(`A porcentagem de votos brancos é ${brancos.toFixed(2)}%`);
console.log(`A porcentagem de votos nulos é ${nulos.toFixed(2)}'%`);
console.log(`A porcentagem de votos validos é ${validos.toFixed(2)}'%`);