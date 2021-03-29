//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda, ' + info.personagem);

//2

info.recorrente = 'Sim';

console.log(info.recorrente);

//3 

for(index in info){
    console.log(index);
}

//4 

for(index in info){
    console.log(info[index]);
}