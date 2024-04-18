//Array ou Vetor

// let listaCompras = Array();

// listaCompras[0] = 'Shampoo'
// listaCompras[1] = 'Condicionador'
// listaCompras[2] = 'Carro'

// console.log(listaCompras);

// let listaFrutas = ['Banana', 'Morango']
// console.log(listaFrutas);

// let listaViagem = Array['Passagens', 'Malas']
// console.log(listaViagem);


// //Array multidimensionais ou matriz - um array dentro de outro array

// let listaCoisas = Array();

// listaCoisas['peças'] = Array();
// listaCoisas ['peças'][0] = 'gpu'
// listaCoisas ['peças'][1] = 'cpu'
// listaCoisas ['peças'][2] = 'ram'
// listaCoisas ['peças'][3] = 'ssd'
// listaCoisas ['peças'][4] = 'case'
// listaCoisas ['peças'][5] = 'psu'
// console.log(listaCoisas)


// //inserção de elementos no final do array
// listaCoisas['peças'].push('water cooler');
// console.log(listaCoisas)


// //inserção de elementos no começo do array
// listaCoisas['peças'].unshift('tower fan');
// console.log(listaCoisas)


// //exclusão de elementos no final do array
// listaCoisas['peças'].pop();
// console.log(listaCoisas)


// //exclusão de elementos no final do array
// listaCoisas['peças'].shift();
// console.log(listaCoisas)


//pesquisar no array
// let listaProdutos = Array('carro', 'moto', 'barco')
// let aux = listaProdutos.indexOf('moto')
// if (aux === -1) {
//     console.log('Elemento não existe no array')
// } else {
//     console.log('Elmento existe no array e está na posição ' + aux)
// }


// //ordenação de array
// let listaProdutos = Array('carro', 'moto', 'aviao', 'caminhão', 'barco')
// console.log(listaProdutos.sort())


//funções

// function calcularAreaTerreno(largura, comprimento) {
//     let area = largura * comprimento
//     return area
// }

// const prompt = require('prompt-sync')()

// let largura = prompt('Digite a largura do terreno em metros: ')
// let comprimento = prompt('Digite o comprimento do terreno em metros: ')

// //chamada da função e passagem de parametros
// let resultado = calcularAreaTerreno(largura, comprimento)

// console.log(`O terreno possui ${resultado} metros quadrados`)

//funçoes anonimas
// let exibirFuncao = function() {
//     console.log('Olá')
// }

// exibirFuncao()

// function exibirFuncao(callbackSucesso, callbackErro) {
//     if (true) {
//         callbackSucesso('Funções de callback em caso de sucesso')
//     } else {
//         callbackErro('Funções de callback em caso de erro')
//     }
// }

// let callbackSucesso = function(titulo) {
//     console.log(titulo)
// }

// let callbackErro = function(erro) {
//     console.log(erro)
// }

// exibirFuncao(callbackSucesso, callbackErro)


//OUTRO EXEMPLO
let soma = function(num1, num2) {
    return num1 + num2
}

let subtracao = function(num1, num2) {
    return num1 - num2
}

let multiplicacao = function(num1, num2) {
    return num1 * num2
}

let divisao = function(num1, num2) {
    return num1 / num2
}

function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao) {
    switch(operacao) {
        case 'soma':
            soma(num1, num2)
            break
    }
}

calculadora('soma', 10, 10, soma)