const lines = prompt ('digite dois valores').split (' ');

const A = (Number(lines[0]));
const B = (Number(lines[1]));

 

const MEDIA = (A * 3.5) + (B * 7.5) / 11;

console.log("MEDIA = " + MEDIA.toFixed(5));