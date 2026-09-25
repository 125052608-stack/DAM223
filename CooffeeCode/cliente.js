// pasar metodos 
const cocina = require("./cocina.js");
const caja = require("./caja.js");
const readline = require("readline");
// leer datos en terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menu();
function menu(){
    console.log("\n¡Bienvenido a CoffeeCode!\n");
    console.log("Elige una opcion");
    console.log("1. Consultar productos");
    console.log("2.Crear pedidos productos");
    console.log("3. Listar pedidos");
    console.log("4. Promociones");
    console.log("5. Mostrar bebidas");
    console.log("6. Mostrar estado del pedido");
    console.log("7. SALIR");

    rl.question("¿Que deseas hacer?\n", (opcion) => {
        switch(opcion){
            case '1':
                consultarProductos();
                menu();
                break;
            case '2':
                crearPedido();
                break;
            case '3':
                listarPedidos();
                menu();
                break;
            case '4':
                mostrarPromociones();
                menu();
                break;
            case '5':
                bebidasDisponibles();
                menu();
                break;
            case '6':
                procesarPedidoCliente();
                break;
            case '7':
                console.log("Gracias por su visita!");
                rl.close();
                break;
            default:
                console.log("Elige una opción válida");
                menu();
                break;
        }
    }
        
    )};

function consultarProductos(){
    cocina.agregarProducto("galleta", 50);
    cocina.editaryBorrar();
    console.log("");
    console.log("---------------------------------");
    console.log("Consultando productos disponibles:");
    console.log("----------------------------------");

    cocina.mostrar();
}


function mostrarPromociones() {
    console.log("");
    console.log("---------------------------------");
    console.log("Mostrar promociones:");
    console.log("----------------------------------");

    const baratos = cocina.productosBaratos();
    baratos.forEach(item => console.log(`- Promo: ${item}`));
}

function bebidasDisponibles() {
    console.log("");
    console.log("---------------------------------");
    console.log("Consultar bebidas disponibles:");
    console.log("----------------------------------");
    const bebidas = cocina.buscarBebidas();
    bebidas.forEach(bebida => console.log(`Producto: ${bebida} `))
}


function crearPedido() {
    console.log("");
    console.log("----------------------------------");
    console.log("Crear pedidos de productos:");
    console.log("----------------------------------");
    rl.question("Ingrese el nombre del producto: ", (producto) => {
        rl.question("Ingrese la cantidad: ", (cantidad) => {
            rl.question("Ingrese el precio: ", (precio) => {


            caja.agregarPedido(producto,precio,cantidad);
            console.log("Pedido creado: " + producto + " - Cantidad: " + cantidad+ " - Precio: "+precio);
            menu();
        });
        });
     });
    
}


function listarPedidos() {
    console.log("");
    console.log("----------------------------------");
    console.log("Listar pedidos:");
    console.log("----------------------------------");

    const resumen = caja.caja();

    // Mostramos cada producto formateado
    resumen.listaPedidos.forEach(({ producto, cantidad, precio, subtotal }, i) => {
        console.log(`Pedido ${i + 1}: ${producto} - Cantidad: ${cantidad} - Precio: $${precio} - Subtotal: $${subtotal}`);
    });

    // Desglose final de la caja
    console.log("----------------------------------");
    console.log(`Subtotal: $${resumen.subtotal.toFixed(2)}`);
    console.log(`IVA (16%): $${resumen.iva.toFixed(2)}`);
    console.log(`Total a pagar: $${resumen.total.toFixed(2)}`);
} 

function procesarPedidoCliente() {
  rl.question("Ingrese el producto a pedir: ", (nombreProd) => {
    setTimeout(() => {
        console.log("\n Hallando producto en cocina...");
        setTimeout(() => {
            console.log("Esperando respuesta de caja...");
            setTimeout(() => {
              caja.validarYProcesarPedido(nombreProd, (error, exito) => {
              if (error) {
                console.log(`Error: ${error}`);
              } else {
                console.log("Pedido listo: No se generaron problemas");
                console.log(`Estado: ${exito}`);
              }
              menu();
            });  
            }, 1000);
        }, 3000);
    }, 1000);   
});
}



