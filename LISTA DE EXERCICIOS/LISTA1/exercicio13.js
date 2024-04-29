let numList = Array();

for (i = 0; i < 5; i++) {
    const prompt = require('prompt-sync')();
    let valores = parseInt(prompt(`Digite o valor ${i + 1}: `));
    numList[i] = valores;

    for (let j = 1; j <= valores; j++) {
        console.log('A tabuada de', j, ' x ', valores, ' = ', j * valores);
    }
}