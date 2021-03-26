//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
//1 - Copiar e colar o código do exercicio anterior
//2 - Criar uma estrutura de if e else
//3 - if - se a média for maior que 20, imprime a mensagem "valor maior que 20"
//4 - else - "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
if((sum / numbers.length) > 20){
    console.log('valor maior que 20');
}
else{
    console.log('valor menor ou igual a 20');
}