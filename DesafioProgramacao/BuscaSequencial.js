/* Uma busca sequencial se caracteriza por percorrermos todos os  elementos de uma estrutura em busca do elemento “X” desejado.
Neste desafio, dada uma estrutura de vetor A[a1, a2...an], percorra todo o vetor fazendo as comparações de A[N] = X.
Caso a condição seja verdadeira, “X” existe na estrutura e a busca será concluída com sucesso.  */

let array = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let num = 750;

function Buscar(array, num) {
    
    for (i = 0; i < array.length; i++){
        let valor = array[i];
        if (valor == num) {
            return `Achei ${num} na posicao ${i}`
        } else if (i == array.length - 1 && valor != num){
            return `Numero ${num} nao encontrado!`
        }
    
    }

}

console.log(Buscar(array, num));

