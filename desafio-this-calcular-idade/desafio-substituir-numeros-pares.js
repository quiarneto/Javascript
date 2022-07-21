/** 
 * Atividade 2: This
 * Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.
 * Crie seus próprios objetos para esta atividade!
 * 
 * Exemplo:
 * function calculaIdade(anos) {
 * 		return `Daqui a ${anos} anos, ${this.nome} terá ${
 * 			this.idade + anos
 * 		} anos de idade.`;
 * }
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 30
}

const pessoa2 = {
	nome: 'Carla',
	idade: 26
}

const animal = {
	nome: 'Fiona',
	idade: 5,
	raca: 'Pug'
}

console.log(calculaIdade.call(pessoa2, 30)); // call - separa por virgula
console.log(calculaIdade.call(animal, 7));

console.log(calculaIdade.apply(animal, [4])); // apply - necessita estar em um array
console.log(calculaIdade.apply(pessoa1, [4]));