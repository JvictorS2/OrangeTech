const numero = 1;

const numberPar = numero % 2 === 0;

console.log(numberPar);

if (numero == 0) {
    console.log("Número inválido.")
}
 else if (numberPar) {
    console.log("É par");
} else {
    console.log("É impar")
}