//Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
//1 - criar um novo array vazio
//2 - criar um loop que percorra todo o array
//3 - criar uma estrutura de repetição que multiplique o numero atual pelo seu posterior
//4 - caso não haja proximo valor, multiplicar por 2;
//4 - armazenar o resultado no novo array
//5 - imprimir o novo array


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];

for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index + 1]) {
        mult.push(numbers[index] * numbers[index + 1]);
    }
    else {
        mult.push(numbers[index] * 2);
    }
}

console.log(mult);