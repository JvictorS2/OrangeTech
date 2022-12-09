/* Elabore um algoritmo que calcule o que dece ser pago por um produto, considerando  preço normal de etiqueta
e a  escolha de condição de pagamento
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código condição de pagamento:
-À vista Débito, recebe 10% de desconto;
-À vista no Dinheiro ou PIX, recebe 15% de desconto;
-Em duas vezes, preço normal de etiqueta sem juros;
-Acima de duas vezes, preço normal de etiqueta mais juros 10%;*/

let precoProduto = 100;
let FormaPagamento = 'Parceldo';
let Parcelas = 2;

if (FormaPagamento == 'Débito')
{
    let PrecoFinal = precoProduto * 0.9;
    console.log(PrecoFinal.toFixed(2));
} else if (FormaPagamento == 'Pix') {
    let PrecoFinal = precoProduto * 0.85;
    console.log(PrecoFinal.toFixed(2));
} else if (FormaPagamento == 'Parcelado' && Parcelas == 2) {
    let PrecoFinal = precoProduto;
    console.log(PrecoFinal.toFixed(2));
} else if (FormaPagamento == 'Parcelado' && Parcelas > 2) {
    let PrecoFinal = precoProduto * 1.1;
    console.log(PrecoFinal.toFixed(2));
} else {
    console.log("Valor inválido");
}


