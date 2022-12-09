/* O IMC - Indice de Massa Corporeal e um criterio da Organização Mundial de Saude para dar uma indicação 
sobre a condição de peso de uma pessoa adulta.  

Formula do IMC
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adulto  condição:
-Abaixo de 18.5: Abaixo do peso;
-Entre 18.5 e 25: Peso normal;
-Entre 25 e 30: Acima do peso;
-Entre 30 e 40 : Obeso;
-Acima de 40 : Obsesidade grave;
*/

let altura = 1.80;
let peso = 65.00;

let Imc = peso / (altura * altura)
console.log(Imc.toFixed(2))

if (Imc < 18.5) {
    console.log("Abaixo do peso.")
} else if (Imc >= 18.5 && Imc < 25) {
    console.log('Peso Normal')
} else if (Imc >= 25 && Imc < 30) {
    console.log('Acima do peso')
} else if (Imc >= 30 && Imc < 40) {
    console.log("Obeso")
} else {
    console.log("Obsesidade grave")
}