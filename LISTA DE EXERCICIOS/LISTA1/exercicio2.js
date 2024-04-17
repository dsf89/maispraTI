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