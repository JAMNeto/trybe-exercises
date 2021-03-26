//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// 1 - criar uma variavel que armazene o menor numero
// 2- criar um loop que percorra o array
// 3 - criar um condição de que se o numero for menor que o anterior, substituir ele
// 4 - imprimir o menor numero

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallerNumber = numbers[0];

for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] < smallerNumber){
        smallerNumber = numbers[index];
    }
}
console.log('o menor número é', smallerNumber);