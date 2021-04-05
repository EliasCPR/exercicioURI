const lines = prompt ('digite dois valores').split (' ');

const nome = (Number(lines[0]));
const salarioFixo = (Number(lines[1]));
const totalVendas = (Number(lines[2]));

const comissao = totalVendas * 0.15;
const salarioFinal = salarioFixo + comissao;

console.log("TOTAL = R$ " + salarioFinal.toFixed(2)); 


