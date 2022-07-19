/* VAR e LET */

//exemplo de hoisting - é entendido como variável global
numberOne = 1;

console.log(ñumberOne + 2);

var numberOne;

//exemplo let - precisa declarar antes
let numberOne; 

numberOne = 1;

console.log(ñumberOne + 2);

var firstName = 'João';
let lastName = 'souza';

if (firstName === 'João') {
    let lastName = 'Rodrigues'; //redeclarado | escopo de bloco
    var firstName = 'Pedro'; // escopo global
    lastName = 'Silva'; //reatribuido

    console.log(lastName);
}

console.log(firstName, lastName);

/* CONSTANTES */

const   FIRST_NAME = 'Stephany';
//não pode reatribuir e nem redeclarar, é uma constante, valor imutável

