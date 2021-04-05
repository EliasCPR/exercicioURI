const lines = prompt ('digite dois valores').split (' ');

const idFuncionario = (Number(lines[0]));
const qtdHorasTrabalhadas = (Number(lines[1]));
const valorHora = (Number(lines[2]));

const salario = qtdHorasTrabalhadas * valorHora;

console.log("NUMBER = " + idFuncionario); 
console.log("SALARY = U$ " + salario.toFixed(2));

