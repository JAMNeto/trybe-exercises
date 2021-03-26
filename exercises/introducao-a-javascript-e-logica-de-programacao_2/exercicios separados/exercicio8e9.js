//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
//1- criar um array vazio
//2- criar um loop que crie numeros em ordem crescente e armazene no array vazio
//3- imprimir o resultado

let numbers = [];

for(let index = 1; index <= 25; index += 1){
    numbers.push(index);
}
console.log(numbers);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let divs = [];
for(let index = 0; index < numbers.length; index += 1){
    divs.push((numbers[index] / 2));
}
console.log(divs);