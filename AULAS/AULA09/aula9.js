// //OBJETOS

// const pessoa = {
//     nome: 'Fulano',
//     idade: 18,
//     email: 'fulano@teste.com',
//     profissao: 'Jão',
//     empregada: true

// }

// // Função com objeto

// pessoa.falar = function () {
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`

// }

// console.log(pessoa.email)

// // OU

// console.log(pessoa)

// const veiculo = {
//     modelo: 'sedan',
//     ano: '2023',
//     cor: 'preto',
//     ligado: true
// }

// for (let chave in veiculo) {
//     console.log(veiculo[chave]);
// }

// for (const chave of veiculo) {
//     console.log(chave.ano);
// }


// let cores = ['azul', 'preto','branco']

// cores.forEach((cor, indice) => {
//     console.log(indice + ': ' + cor)
// })

// const numeros = Array(1, 2, 3, 4, 5)

// numeros.forEach(numeros => {
//     console.log(`Números multiplicados: ${numeros*2}`)    
// });

let BicicletaFactory = function(cor, tipo, marca) {
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('azul', 'trail', 'monark')

console.log(bicicleta1)