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
        for (let i=0; i<pedidoss.length; i++) {
            console.log(" Pedido "+(i+1)+": "+pedidoss[i].producto+" - Cantidad: "+pedidoss[i].cantidad+" - Precio: $"+pedidoss[i].precio+" - Subtotal: $"+caja.obtenerPedidos()[i].subtotal);
        }
        console.log("Total acumulado: $"+caja.obtenerTotal());
} 



function crearPedido() {
    console.log("----------------------------------");
    console.log("Crear pedidos de productos:");
    console.log("----------------------------------");
    rl.question("Ingrese el nombre del producto: ", (producto) => {
        rl.question("Ingrese la cantidad: ", (cantidad) => {
            rl.question("Ingrese el precio: ", (precio) => {

                //se convierte texto a numero evita errores 
                const subcantidad = Number(cantidad);
                const subprecioo = Number(precio);

            caja.agregarPedido(producto, subprecioo, subcantidad);
            console.log("Pedido creado: " + producto + "- Precio: $" + subprecioo + " - Cantidad: " + subcantidad);
            listarPedidos();

            mostrarPromociones();
            productosDisponibles();
           rl.close();
            });
        });
     });
    
}
crearPedido();

/* PT 2 */

function mostrarPromociones() {
    console.log("---------------------------------");
    console.log("Mostrar promociones:");
    console.log("----------------------------------");

    const baratos = cocina.productosBaratos();
    baratos.forEach(item => console.log(`- Promo: ${item}`));
}

function productosDisponibles() {
    console.log("---------------------------------");
    console.log("Consultar productos disponibles:");
    console.log("----------------------------------");
    cocina.menu.map(({ producto, precio }, i) =>
        console.log(`${i + 1}. ${producto} - $${precio.toFixed(2)}`));
}