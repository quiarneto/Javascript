let nome = "João";
let sobrenome = "Pedro";

nome.concat(sobrenome); //"JoãoPedro"

let concatenado = nome.concat(sobrenome);
typeof concatenado //"string"
concatenado.length // tamanho da string - 9

let exemplo = new String("blablabla");
typeof exemplo // "object"

nome[1]; // "o" - índice inicia em zero.

concatenado = nome + " " + sobrenome; //"João Pedro"

concatenado = nome + "\n" + sobrenome /* João 
                                        Pedro*/

concatenado = `${nome} ${sobrenome}`; // João Pedro

concatenado = `${nome} 

${sobrenome}`;/* João 

                Pedro*/

concatenado = "\"" // "

let frase = "Olá, tudo bem?";
frase.split(""); //(14) ["O","l","á",","," ","t","u","d","o"," ","b","e","m","?"] - separa cada caractere
frase.split(" "); // (3) "Olá", "tudo", "bem?" - separa onde tiver espaço - palavras
frase.includes("tudo"); // true - valida se tem a palavra informada na string
frase.startsWith("O"); // true - Valida se começa a string com a letra informada
frase.endsWith("?"); // true - Valida se termina a string com a letra informada
frase.replace(",", "!"); // "Olá! tudo bem?" - muda o caractere, no caso, a virgula pela exclamação
let stringModificada = frase.replace(",", "!"); //apresenta a string modificada, porém a frase original está original