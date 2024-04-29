const maquinaDeLavar = {
    ligado: false,
    capacidade: '11kg',
    potencia: '1500',
    cor: 'Inox'

}

maquinaDeLavar.ligar = function () {
    return `A máquina está ${this.ligado}`
}

console.log(maquinaDeLavar)