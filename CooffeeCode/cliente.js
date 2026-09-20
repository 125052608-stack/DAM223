// pasar metodos 
const cocina = require("./cocina.js");
const caja = require("./caja.js");
const readline = require("readline");
// leer datos en terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("¡Bienvenido a CoffeeCode!");

cocina.agregarProducto("galleta", 50);
console.log("---------------------------------");
console.log("Consultar productos disponibles:");
console.log("----------------------------------");

cocina.mostrar();

function listarPedidos(pedidos) {
    
    console.log("----------------------------------");
    console.log("Listar pedidos:");
    console.log("----------------------------------");

    const pedidoss = caja.obtenerPedidos();
        for(let i=0; i<pedidoss.length; i++) {
            console.log(" Pedido "+(i+1)+": "+pedidoss[i].producto+" - Cantidad: "+pedidoss[i].cantidad+" - Precio: $"+pedidoss[i].precio+" - Subtotal: $"+pedidoss[i].subtotal);
        }
        console.log("Total acumulado: $"+caja.obtenerTotal());
} 

console.log("----------------------------------");
console.log("Crear pedidos de productos:");
console.log("----------------------------------");

function crearPedido() {
    rl.question("Ingrese el nombre del producto: ", (producto) => {
        rl.question("Ingrese la cantidad: ", (cantidad) => {
            rl.question("Ingrese el precio: ", (precio) => {

            caja.agregarPedido(producto, precio, cantidad);
            console.log("Pedido creado: " + producto + "- Precio: $" + precio + " - Cantidad: " + cantidad);
            listarPedidos();
           rl.close();
            });
        });
     });
    
}
crearPedido();
