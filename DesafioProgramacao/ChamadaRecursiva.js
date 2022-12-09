

let n = 10

let soma = 0;

function somatorio(n) {

    for (i = n; i > 0; i--) {
        soma += i;
    }

    return soma;
}

console.log(somatorio(n));