
let A = 3;
let N = 18;

let Multiplos = [];
let soma = 0;

for (i = A; i <= N; i += A) {
    soma += i;
}

console.log(soma)



/* for (i = A; i <= N; i = i + A){
    Multiplos.push(i);
    console.log(Multiplos)
}


for (i = 0; i < Multiplos.length; i++){
    let t = Multiplos[i];
    console.log(t)
    soma = soma + t;
} */