//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
//1 - criar uma variavel q armazene numeros impares
//2 - criar um loop que percorra todo o array;
//3 - criar uma estrutura condicional que incremente a variavel numeros impares cada vez que um impar for encontrado
//3.1 - se o numero[index] % 2 for diferente de 0, ele é impar, aumenta o contador
//4 - imprime o contador de numeros impares

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNum = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
        oddNum += 1;
    }
}
console.log('existem', oddNum, 'numeros impares na sua array');
