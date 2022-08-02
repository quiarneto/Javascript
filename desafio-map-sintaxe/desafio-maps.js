/** 
 * MAP
 * Pratique a sintaxe de multiplicação de números, uma vez utilizando o parêmetro this de um objeto criado por você, 
 * e depois sem ele.
*/

const maca = {
	value: 2,
}

const laranja = {
	value: 3,
}

function mapConThis(arr, thisArg) {
	return arr.map(function(item){
		return item * this.value;
	}, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã ', mapConThis(nums, maca));

console.log('this -> Laranja ', mapConThis(nums, laranja));

console.log("**************************************************************");

/*
map com multiplicação
*/

function mapSemThis(arr) {
	return arr.map(function (item) {
		return item * 2;
	});
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));

console.log(nums2);

