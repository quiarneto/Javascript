//Trabalhando com Terminal
//console.log('Hello world!')

//node "nomeDoArquivo.js"

// apontar números pares e impares
let evenNums = [];
function returnEvenValues(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }  else{
            console.log(`${array[i]} não é par`);
        }
    }
    console.log('os números pares são: ', evenNums);
}

let array = [1,2,4,5,7,8];
returnEvenValues(array);