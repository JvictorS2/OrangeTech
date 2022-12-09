/* Nesse desafio, dados dois números, verifique se eles são iguais.Caso sejam, retorne "Sao iguais!”.
 Caso contrário, retorne "Nao sao iguais!” sem as aspas.  */

let A = 50;
let B = 50;


function saoIguais(a, b) {
    if (a === b) {
        return 'Sao iguais!'
    } else {
        return 'Nao sao iguais!'
    }
}

console.log(saoIguais(A, B));