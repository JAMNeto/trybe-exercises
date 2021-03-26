//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
//1 - criar uma variável soma
//2 - criar um loop que percorra todo o array
//3 - somar o numero na posição inicial com o numero seguinte
//4 - somar a soma com o numero seguinte e assim sucessivamente
//5 - imprimir o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log(sum);