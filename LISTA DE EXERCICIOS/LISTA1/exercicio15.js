// Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

// Instruções: o usuário deverá informar a quantidade de números que desejar ou zero para finalizar o código

function lerNumeroDecimal() {
    const prompt = require('prompt-sync')();
    let valor = prompt("Digite um número decimal (ou 0 para finalizar): ");
    while (isNaN(valor) || valor === "") {
        valor = prompt("Valor inválido. Digite um número decimal (ou 0 para finalizar): ");
    }
    return parseFloat(valor);
}

function calcularMediaPonderada() {
    let somaValores = 0;
    let somaPesos = 0;
    let valor = lerNumeroDecimal();

    while (valor !== 0) {
        let peso = lerNumeroDecimal();

        somaValores += valor * peso;
        somaPesos += peso;

        valor = lerNumeroDecimal();
    }

    if (somaPesos === 0) {
        console.error("Erro: Nenhum peso foi informado.");
    } else {
        const mediaPonderada = somaValores / somaPesos;
        console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
    }
}

calcularMediaPonderada();
