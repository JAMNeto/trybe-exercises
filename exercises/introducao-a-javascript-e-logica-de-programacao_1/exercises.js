let  a = 5;
let b = 10;
let c = 15;

//Questão 1

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(b % a);

//Questão 2

if(a > b){
    console.log(a);
}
else if(a < b){
    console.log(b);
}
else {
    console.log('Eles são iguais');
}

//Questão 3


if(a > b && a > c){
    console.log(a);
}
else if(b > a && b > c){
    console.log(b);
}
else if(c > a && c > b){
    console.log(c)
}
else {
    console.log('Eles são iguais');
}

//Questão 4

if (a > 0){
    console.log('positive');
}
else if (a < 0){
    console.log('negative');
}
else{
    console.log(0);
}

//Questão 5

let ang1 = 50;
let ang2 = 70;
let ang3 = 50;

if((ang1 + ang2 + ang3) == 180){
    console.log (true);
}
else{
    console.log(false);
}

//Questão 6

let piece = 'king';
piece .toLowerCase();

if (piece == 'bishop'){
    console.log('bishop -> diagonals');
}
else if(piece == 'rook'){
    console.log('rook -> straight line');
}
else if(piece == 'queen'){
    console.log('queen -> any direction');
}
else if(piece == 'king'){
    console.log('king -> one vacant square in any direction');
}
else if(piece == 'knight'){
    console.log('knight -> moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner');
}
else if(piece == 'pawn'){
    console.log('pawn -> forward exactly one square, or optionally, two squares when on its starting square');
}
else{
    console.log('invalid piece');
}

//Questão 7
    let nota = -5;
    if (nota < 0 || nota > 100){
        console.log('Erro, nota inválida');
    }
    else if (nota >= 90){
        console.log('Sua nota é A');
    }
    else if (nota >= 80){
        console.log('Sua nota é B');
    }
    else if (nota >= 70){
        console.log('Sua nota é C');
    }
    else if (nota >= 60){
       console.log('Sua nota é D');
    }
    else if (nota >= 50){
       console.log('Sua nota é E');
    }
    else if (nota < 50){
       console.log('Sua nota é F');
    }
    
    //Questão 8
    let num1 = 6; num2 = 7, num3 = 9;
    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0){
        console.log('true');
    }
    else {
        console.log('false');
    }

    //Questão 9
    let num1 = 6; num2 = 8, num3 = 10;
    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
        console.log('true');
    }
    else {
        console.log('false');
    }

    //Questão 10
    let custoProduto = 110, valorVenda = 150;
    impostoSobreCusto = (20 / 100) * custoProduto;
    custoTotalProduto = custoProduto + impostoSobreCusto;
    lucro = valorVenda - custoTotalProduto;
    lucroTotal = lucro * 1000;
    if (custoProduto <= 0){
        console.log('Erro, valor inválido')
    }
    else {
        console.log('Seu lucro é de', lucroTotal,'reais');
    }

    //Questão 11

    let salarioBruto = 3000;
    if (salarioBruto <= 1556.94){
        salarioBase = salarioBruto - ((8 / 100) * salarioBruto);
    } 
    else if (salarioBruto <= 2594.92){
        salarioBase = salarioBruto - ((9 / 100) * salarioBruto);
    }
    else if (salarioBruto <= 5189.82){
        salarioBase = salarioBruto - ((11 / 100) * salarioBruto);
    }
    else if (salarioBruto > 5189.82){
        salarioBase = salarioBruto - 570.88;
    }
    console.log('Seu salário com desconto de INSS é R$', salarioBase);
    if (salarioBase <= 1903.38){
        salarioLiquido = salarioBase;
    }
    else if (salarioBase <= 2826.65){
        salarioLiquido = salarioBase - (((7.5 / 100) * salarioBase) - 142.80);  
    }
    else if (salarioBase <= 3751.05){
        salarioLiquido = salarioBase - (((15 / 100) * salarioBase) - 354.80);  
    }
    else if (salarioBase <= 4664.68){
        salarioLiquido = salarioBase - (((22.5 / 100) * salarioBase) - 636.13);  
    }
    else if (salarioBase > 4664.68){
        salarioLiquido = salarioBase - (((27.5 / 100) * salarioBase) - 869.36);  
    }
    console.log('Seu salário líquido com desconto de INSS e IR é de', salarioLiquido);
