
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1

for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//Exercicio 2
let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
   soma += numbers[index];
}
console.log(soma);

//Exercicio 3
let media = soma / numbers.length;
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
 }

 console.log(media);

 //Exercicio 4

 if (media > 20){
     console.log('Média maior que 20');
 }
 else {
     console.log('Média menor ou igual a 20');
 }

 //Exercicio 5
 let biggestNumber = 0;
 let number = 0;
 for(let index = 0; index < numbers.length; index += 1){
    number = numbers[index];
    if(number > biggestNumber){
        biggestNumber = number;
    }
 }
 console.log(biggestNumber);

 //Exercicio 6

 let impares = 0;
 for(let index = 0; index < numbers.length; index += 1){
     if(numbers[index] % 2 != 0){
         impares +=1;
     }
 }
 if(impares > 0){
     console.log('Na array number existem', impares,'numeros impares');
 }
 else{
     console.log('Nenhum valor impar encontrado');
 }

 //Exercicio 7
 let smallerNumber = numbers[0];
 let number1 = 0;
 for(let index = 0; index < numbers.length; index += 1){
    number1 = numbers[index];
    if(number1 < smallerNumber){
        smallerNumber = number1;
    }
 }
 console.log(smallerNumber);