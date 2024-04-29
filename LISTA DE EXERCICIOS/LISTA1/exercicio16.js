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
