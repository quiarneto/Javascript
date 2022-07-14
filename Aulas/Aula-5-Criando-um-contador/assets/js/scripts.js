var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
//vai pegar o valor do elemento #currentNumber e aumentar o valor
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
//vai pegar o valor do elemento #currentNumber e diminuir o valor
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}