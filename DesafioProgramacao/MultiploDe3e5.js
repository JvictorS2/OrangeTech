/* Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz".  */

let resultado = 1;

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz';
    } else if (num % 3 == 0 && num % 5 != 0) {
        return 'Fizz';
    } else if (num % 3 != 0 && num % 5 == 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

console.log(fizzBuzz(resultado));