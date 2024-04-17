//Exercício 1: Verificar se o número é par ou impar

// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt('Digite um número: '));

// if (num1 % 2 === 0)
//     console.log('É par');
// else
//     console.log('É ímpar');

//segunda forma
// const prompt = require(`prompt-sync`)();
// let number = parseInt(prompt("digite um número: "));
// const parImpar = number % 2 === 0 ? "O número é par" : "O número é impar";
// console.log(parImpar);
//=================================================================================================


//Exercício 2: qual o maior número digitado é o maior

// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt('Digite o primeiro número: '));
// let num2 = parseInt(prompt('Digite o segundo número: '));

// if(num1 > num2) {
//     console.log('O Primeiro número é maior!');
// } else if (num2 > num1) {
//     console.log('O Segundo número é maior!');
// } else
//     console.log('Os números são iguais');
//=================================================================================================

//Exercício 3: 

// const prompt = require('prompt-sync')();

// let lado1 = parseInt(prompt('Informe o comprimento do primeiro lado: '))
// let lado2 = parseInt(prompt('Informe o comprimento do segundo lado: '))
// let lado3 = parseInt(prompt('Informe o comprimento do terceiro lado: '))

// if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
//     console.log('É possível formar um triângulo com as medidas informadas.')
// } else {
//     console.log('Não é possível formar um triângulo com as medidas informadas.');
// }
//=================================================================================================

//Exercício 4: Calculadora simples

// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt('Informe o primeiro número: '));
// let num2 = parseInt(prompt('Informe o segundo número: '));
// let operacao = prompt('Insira a operação desejada: (+, -, /, *) ');

// let resultado;

// if (operacao === '+') {
//     resultado = num1 + num2;
// } else if (operacao === '-') {
//     resultado = num1 - num2;
// } else if (operacao === '*') {
//     resultado = num1 * num2;
// } else if (operacao === '/') {
//     if (num2 !== 0) {
//         resultado = num1 / num2;
//     } else {
//         console.log('Erro: divisão por zero.');
//         resultado = undefined;
//     }
// } else {
//     console.log('Operação inválida');
// }

// if (resultado !== undefined) {
//     console.log('Reultado: ', resultado);
// }
//=================================================================================================

//Exercício 5: Switch case

// const prompt = require('prompt-sync')();

// let dia = parseInt(prompt('Insira o número do dia da semana: '));

// let nomeDia;

// switch(dia) {
//     case 1:
//         nomeDia = 'Domingo'
//         break;
//     case 2:
//         nomeDia = 'Segunda Feira'
//         break;
//     case 3:
//         nomeDia = 'Terça Feira'
//         break;
//     case 4:
//         nomeDia = 'Quarta Feira'
//         break;
//     case 5:
//         nomeDia = 'Quinta Feira'
//         break;
//     case 6:
//         nomeDia = 'Sexta Feira '
//         break;
//     case 7:
//         nomeDia = 'Sábado'
//         break;
//     default:
//         console.log('Informe um valor que esteja entre 1 a 7');
// }

// console.log('O dia é: ', nomeDia);
//=================================================================================================

//Exercício 6: Laço de repetição

// let contador = 0;
// let multiplicando = 5;

// for (contador = 0; contador <=10; contador++) {
//     console.log(`${multiplicando} * ${contador} =`, multiplicando * contador);
// }


//Imprimir números pares

// for (let i = 0; i <= 100; i+=2){
//     console.log(i)
// }


// let soma = 0;

// for (let i = 0; i <= 1 0; i--){
//     soma += i;   
// }
// console.log(soma);


// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }


//While

//let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


//Imprimir os múltiplos de 5 menores que 100

// let i = 5;

// while (i <= 100) {
//     console.log(i);
//     i += 5;
// }


let i = 0;
let soma = 0;

while (i <=1000) {
    soma += i;
    i++;
    console.log(soma);    
}


//do while

// const prompt = require('prompt-sync')();
// let senha;

// do {
//     senha = prompt('Digite a senha: ');
// } while (senha !== '1234')

// console.log('Senha correta!')

// const prompt = require('prompt-sync')();
// const numeroCorreto = Math.floor((Math.random() * 10) + 1)
// console.log(numeroCorreto)
// let tentativa

// do {
//     tentativa = parseInt(prompt('Advinhe o número entre 1 e 10: '))
//     if (tentativa < numeroCorreto) {
//         console.log('Tente um número maior')
//     } else if (tentativa > numeroCorreto) {
//         console.log('Tente um número menor')
//     } else {
//         console.log('Acertou!')
//     }
// }