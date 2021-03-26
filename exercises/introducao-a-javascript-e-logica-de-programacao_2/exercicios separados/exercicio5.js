//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// 1 - criar uma variavel que armazene o maior numero
// 2- criar um loop que percorra o array
// 3 - criar um condição de que se o numero for maior que o anterior, substituir ele
// 4 - imprimir o maior numero

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = numbers[0];

for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] > biggestNumber){
        biggestNumber = numbers[index];
    }
}
console.log('o maior número é', biggestNumber);
