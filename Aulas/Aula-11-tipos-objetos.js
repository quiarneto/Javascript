let obj = {};
typeof obj // "object"

obj.name = "Julia"; // "Julia"
obj // {name: "Julia"} - chave name com valor "Julia"

obj.age = 20; // 20
obj // {name: "Julia", age: 20} - chave name com valor "Julia", chave age com valor 20

Object.values(obj); // (2) ["julia", 20] 
Object.keys(obj); // (2) ["name", "age"] 

let person = {
    name: "Julia",
    age: 20,
    adress: "Rua 2"
};
person // {name: "Julia", age: 20, adress: "Rua 2"}

person.name // "Julia" - retorna o valor da chave informada
person["name"] // "Julia" - retorna o valor da chave informada

person["numberOfSibilings"] = 3 // pode ser adicionadas chaves e valores dessa forma {name: "Julia", age: 20, adress: "Rua 2", numberOfSibilings:3}  

let mom = "nameOfMon";
person[mom] = "Maria"
person // adiciona informações atráves de variaveis {name: "Julia", age: 20, adress: "Rua 2", nameOfMon: "Maria", numberOfSibilings:3}  


