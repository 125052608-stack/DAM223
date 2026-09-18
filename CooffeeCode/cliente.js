console.log("¡Bienvenido a CoffeeCode!");

console.log("Consultar productos disponibles:");
productos = ["Café", "Té", "Chocolate", "Galletas", "Pasteles"];
function listarProductos(productos) {
    if(productos.length <= 0) {
        console.log("No hay productos disponibles");
    }
    if(productos.length > 0) {
        for(let i=0; i<productos.length; i++) {
            console.log("Producto "+(i+1)+": "+productos[i]);
        }

    }
}
listarProductos(productos);
console.log("Crear pedidos de productos:");
function crearPedido(producto, cantidad ) {
    console.log("Pedido creado: "+producto+" - Cantidad: "+cantidad);
}
crearPedido("Café", 2);
console.log("Listar pedidos:");
function listarPedidos(pedidos) {
    if(pedidos.length <= 0) {
        console.log("No hay pedidos disponibles");
    }
    if(pedidos.length > 0) {
        for(let i=0; i<pedidos.length; i++) {
            console.log("Pedido "+(i+1)+": "+pedidos[i].producto+" - Cantidad: "+pedidos[i].cantidad);
        }
    }
}