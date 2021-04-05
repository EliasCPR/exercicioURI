var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;
const raio = parseFloat(input);

const volumeEsfera = (4/3) * PI * Math.pow(raio,3);

console.log("VOLUME = " + volumeEsfera.toFixed(3));

