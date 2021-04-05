var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const[idItem1, qtdItem1, valorUnitarioItem1] = lines.shift().split(" ");
const[idItem2, qtdItem2, valorUnitarioItem2] = lines.shift().split(" ");

const valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
const valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

const valorTotalCompra = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorTotalCompra.toFixed(2));