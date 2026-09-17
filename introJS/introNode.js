console.log("Hola mundo NODE");
let edad1 = 20;
let edad2 = 22;

console.log("Edad promedio: ");
console.log((edad1+edad2)/2);

console.log("Medidor de procesos");

console.time('miProceso');
    for(let i=0; i>100000000; i++){
        
    }
console.timeEnd('miProceso');