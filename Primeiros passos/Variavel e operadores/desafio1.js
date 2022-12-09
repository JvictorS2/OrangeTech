/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis.Sendo elas:
1 - Preço do combustível;
2 - Valor médio de gasto de carro;
3 - Distância em KM de viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

var precoCombustivel = 4.50;
const valorMedio = 10;
var Distancia = 999;

var ListrosConsumidos = Distancia / valorMedio;
var GastoCombustivel = precoCombustivel * ListrosConsumidos;

console.log(GastoCombustivel.toFixed(2));



