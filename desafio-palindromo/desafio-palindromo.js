/** 
 * Atividade 1
 * Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
 * Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa 
   (ex.: raiar, ama, ovo, radar)
*/



// solução 1
function verificaPalindromo(string) {
	if (!string) return "string inexistente" // valida se a string vem null, empty, undefined e retorna pra função

	string.split("").reverse().join("") === string; 
	//separa as letras e transforma em array; 
	//reverte a ordem das letras; 
	//junta as letras; 
	//verifica se é igual a string original.
}
console.log(verificaPalindromo("ovo"));

// solução 2
// omo
// 012

// abba
// 0123
function verificaPalindromo2(string) {
	if (!string) return "string inexistente"

	for(let i = 0; i < string.length / 2; i++) {
		if(string[i] !== string[string.length -1 - i]) {
			return false;
		}
	}
	return true;
}
console.log(verificaPalindromo2("abba"));