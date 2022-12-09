/* function teste(name) {
    console.log("Your name is " + name)
}

teste('Accudi') */

function IMC(altura, peso) {
    return peso / (altura * altura)

}

function CalcularResultado(Imc) {
    if (Imc < 18.5) {
        return "Abaixo do peso."
    } else if (Imc >= 18.5 && Imc < 25) {
        return 'Peso Normal'
    } else if (Imc >= 25 && Imc < 30) {
        return 'Acima do peso'
    } else if (Imc >= 30 && Imc < 40) {
        return "Obeso"
    } else {
        return "Obsesidade grave"
    }  
}

function main() {
    let altura = 1.80;
    let peso = 65.00;

    let Imc = IMC(altura, peso);
    console.log(Imc);  
    console.log(CalcularResultado(Imc));
}

main()
