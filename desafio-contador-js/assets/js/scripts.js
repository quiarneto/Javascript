//vai pegar o valor do elemento #currentNumber e aumentar o valor
// primeiro contador
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment1() {
    var currentNumberButtonIncrement = document.getElementById('adicionar1');
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else if (currentNumber == 10) {
        currentNumberButtonIncrement.setAttribute('disabled')
    }
}
//vai pegar o valor do elemento #currentNumber e diminuir o valor
function decrement1() {
    var currentNumberButtonDecrement = document.getElementById('subtrair1');
    if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else if (currentNumber == -10) {
        currentNumberButtonDecrement.setAttribute('disabled')
    }
}


//segundo contador
var currentNumberWrapper_red = document.getElementById('currentNumber_red');
var currentNumber_red = 0;

function increment2() {
    if (currentNumber_red <= 0) {
        currentNumber_red = currentNumber_red + 1;
        currentNumberWrapper_red.style.color = 'red';
        currentNumberWrapper_red.innerHTML = currentNumber_red;
    }else if (currentNumber_red >= 0) {
        currentNumber_red = currentNumber_red + 1;
        currentNumberWrapper_red.style.color = 'black';
        currentNumberWrapper_red.innerHTML = currentNumber_red;
    }
    
}
//vai pegar o valor do elemento #currentNumber e diminuir o valor
function decrement2() {
    if (currentNumber_red >= 0) {
        currentNumber_red = currentNumber_red - 1;
        currentNumberWrapper_red.style.color = 'black';
        currentNumberWrapper_red.innerHTML = currentNumber_red;
    }else if (currentNumber_red < 0) {
        currentNumberWrapper_red.style.color = 'red';
        currentNumber_red = currentNumber_red - 1;
        currentNumberWrapper_red.innerHTML = currentNumber_red;
    }
}

/*
disabled - desabilita botão
*/