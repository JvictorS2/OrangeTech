const { gets, print } = require('./functions');

let numeroSorteados = [];


for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < 5; i++){
    const numeroSorteado = numeroSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);