'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

let idade = lines[0];
let anos = 0;
let mes = 0;
let dias = 0;

if(idade >= 365){
    anos = parseInt(idade / 365);

    idade = idade - (anos * 365);
}
if(idade >= 30){
    mes = parseInt(idade / 30);

    idade = idade - (mes * 30);
}

dias = idade;

console.log(anos + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");