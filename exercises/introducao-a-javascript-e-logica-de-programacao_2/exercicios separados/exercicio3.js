//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
//1 - criar variável soma
//2 - criar um loop que percorra o array
//3 - somar os itens dentro do array;
//4 - dividir a soma pelo tamanho do array;
//5 - imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log(sum / numbers.length);