/** 
 * REDUCE
 * 1 - Some todos os números de um array.
 * 2 - Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
 * Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

// Exercício 1 -----
function somaNumeros(arr) {
	return arr.reduce(function(prev, current) {
		console.log({prev});
		console.log({current});
		return prev + current;
	});
}

const arr = [1,2];

console.log(somaNumeros(arr));
console.log("***********************************************");

// Exercício 2 -----
const lista = [
	{
		name: 'sabao em po',
		preco: 30,
	},
	{
		name: 'cereal',
		preco: 12,
	},
	{
		name: 'toalha',
		preco: 30,
	},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
	return lista.reduce(function(prev, current, index) {
		console.log('rodada ', index + 1);
		console.log({prev});
		console.log({current});
		return prev - current.preco;
	}, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));