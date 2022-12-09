/* 1 - Crie uma classe para representar CalcularResultado;
Os carros possuem uma Marca , uma cor e um gasto médio de combustível por kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustivel nos de o valor 
gasto em reais para realizar este percurso. */

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    CalcularGasto(distancia, precoCombustivel) {
        let QuantidadeCombustivel = distancia /this.gastoMedio;
        let Gasto = QuantidadeCombustivel * precoCombustivel;
        return (`O carro da ${this.marca} e cor ${this.cor} gasta um total de ${Gasto.toFixed(2)}R$ em ${distancia} Km rodados.`)
    }
}

let MeuCarro = new Carro('Fiat', 'Violeta', 12);

console.log(MeuCarro.CalcularGasto(70, 5.00));

