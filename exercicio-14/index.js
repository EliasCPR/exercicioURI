var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [distanciaPercorrida, combustivelGasto] = input.split("\n");

const consumoMedio = distanciaPercorrida / combustivelGasto;

console.log(consumoMedio.toFixed(3) + " km/l");
