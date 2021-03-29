//Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let ast = [];
let ast2 = [];

for(let index = 0; index < n; index += 1){
    ast.push(' ');
}
for(let index = 0; index < n; index += 1){
    ast2.push('*');
}
if(ast[(n - 1) / 2] === ' '){
    ast[(n - 1) / 2] = '*';
    console.log(ast);
}
if(ast[[(n - 1) / 2]] === '*'){
        ast[((n - 1) / 2) - 1] = '*';
        ast[((n - 1) / 2) + 1] = '*'
        console.log(ast);
}
console.log(ast2);
