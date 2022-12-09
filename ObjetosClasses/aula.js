//Objeto em JavaScript é uma coleção dinâmica de chave e valor.

const Vitor= {
    nome: "Joao",
    idade: 18,
    Descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

class Pessoa {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    Descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }
}

Vitor.altura = 1.80

console.log(Vitor.nome)
console.log(Vitor.idade)
console.log(Vitor)

Vitor.Descrever();

let JVictor = new Pessoa('Victor', 19);


JVictor.Descrever();

let p1 = new Pessoa("Dunck", 17);
let p2 = new Pessoa("Ana", 18);

function comparePessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo que ${p2.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}

comparePessoas(p1, p2);
