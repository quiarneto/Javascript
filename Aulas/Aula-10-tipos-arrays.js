let array = []; // inicializar um array
let arrayObjeto = new array(); // pode ser feito, mas não é comum

array.push(3); // adicionando um número ao final do array... 1 - tamanho
array; // [3] - valor

array.push(2); // tamanho 2
array; // (2) [3,2]

array.pop() // 2 - removerá o último item do array
array; // [3]

array.push(2); // tamanho 2
array; // (2) [3, 2]

array.push(5); // tamanho 3
array; // (2) [3, 2, 5]

array.shift(); // remove o primeiro item do array
array; // (2) [2, 5]

array.unshift(1); // adiciona item no começo do array
array; // (3) [1, 2, 5]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index])    
} // 1 2 5

array.includes(3); // verifica se tem o numero 3 no array - false

array.every(item => item === 5); // para saber se todos os itens são iguais a 5 - false

array.some(item => item === 5); // verifica se um dos itens do array é 5 - true

array.reverse(); // reverte a ordem dos itens - (3) [5, 2, 1]