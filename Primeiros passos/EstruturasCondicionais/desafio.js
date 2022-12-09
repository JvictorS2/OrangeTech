/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis.Sendo elas:
1 - Preço do combustível;
2 - Preço do etanol;
3 tipo de combustivel;
4 - Valor médio de gasto de carro;
5 - Distância em KM de viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

let PrecoEtanol = 3.50;
let precoGasolina= 4.50;
let TipoDeCombustivel = 'Gasolina';
let ValorMedio = 10;
let Distancia = 100;

let QuantidadeCombustivel = ValorMedio * Distancia;

if (TipoDeCombustivel == 'Etanol') {
    let ValorGasto = QuantidadeCombustivel * PrecoEtanol;
    console.log(ValorGasto.toFixed(2))
} else if (TipoDeCombustivel == 'Gasolina') {
    let ValorGasto = QuantidadeCombustivel * precoGasolina;
    console.log(ValorGasto.toFixed(2))
} else {
    console.log("Valor inválido.")
}