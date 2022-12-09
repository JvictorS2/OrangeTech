/* Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima 
a sua média e a sua classificação conforme a tabela abaixo: 

Classificação:
-media menor que 5, reprovado;
-média entre 5 e 7, recuperação;
-média maior que 7, aprovado
*/

let nota1 = 10;
let nota2 = 9;
let nota3 = 9;

media = (nota1 + nota2 + nota3) / 3;

console.log(media)

if (media < 5) {
    console.log("Reprovado");
} else if (media <= 7 && media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}