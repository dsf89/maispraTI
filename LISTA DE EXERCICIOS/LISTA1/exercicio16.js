// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo

// Instruções: o usuário deverá apenas executar o código

function primo(num) {

    if (num <= 1) {
        return false;
    }

    let divisor = 2;

    while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) {
            return false;
        }

        divisor += 2;
    }
    return true;
}

let contador = 0;
let num = 101;
while (contador < 50) {
    if (primo(num)) {
        console.log(num);
        contador++;
    }
    num++;
}
