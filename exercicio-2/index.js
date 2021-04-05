const lines = prompt ('digite dois valores').split (' ');

    const n = 3.14159;
    const raio = Math.pow (Number(lines[0]), 2);

    const area = n * raio;

    console.log ('A='+ area.toFixed(4)); 