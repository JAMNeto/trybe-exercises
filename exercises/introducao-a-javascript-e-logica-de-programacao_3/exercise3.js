//Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let ast = [];
for(let index = 0; index < n; index += 1){
    ast.push(' ');
}

for(let index2 = (n - 1); index2 >= 0; index2 -= 1){
    if(ast[index2] === ' '){
    ast[index2] = '*';
}
console.log(ast);
}
