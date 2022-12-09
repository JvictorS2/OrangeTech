/* Crie um classe para reprensentar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu imc.
Instâncie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor
do seu IMC
*/

class Pessoa2 {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    CalcularImc() {
        let Imc = this.peso / Math.pow(this.altura, 2);
        return Imc.toFixed(2);
    } 
    
    ClassificarImc() {
        let Imc = this.CalcularImc();
        if (Imc < 18.5) {
            return "Abaixo do peso.";
        } else if (Imc >= 18.5 && Imc < 25) {
            return 'Peso Normal';
        } else if (Imc >= 25 && Imc < 30) {
            return 'Acima do peso';
        } else if (Imc >= 30 && Imc < 40) {
            return "Obeso";
        } else {
            return "Obsesidade grave";
        }
    }
}

let Jose = new Pessoa2('José', 70, 1.75);
console.log(Jose.CalcularImc());
console.log(Jose.ClassificarImc())

let Joao = new Pessoa2('Joao', 65, 1.80);
console.log(Joao.CalcularImc());
console.log(Joao.ClassificarImc())