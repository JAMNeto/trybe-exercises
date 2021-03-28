//Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let ast = [];

for(let index = 0; index < n; index += 1){
    ast.push(' ');
}
for(let index = (n - 1); index >= 0; index -= 1){
    if(ast[index] === ' '){
        ast[index] = '*';
    }
    console.log(ast);
}
