let listadePedidos = [];
let totalAcumulado = 0;

const cocina = require("./cocina.js")

function agregarPedido(producto, precio,cantidad) {
  // se convierte en numero lo ingresado en terminal
  const precioNum = Number(precio);
  const cantidadNum = Number(cantidad);
  const subtotal = precioNum * cantidadNum;
  // se usa destructing aqui
  listadePedidos.push({ producto, precio: precioNum, cantidad: cantidadNum, subtotal});

  totalAcumulado += subtotal;
}

// Funciones para compartir los datos con el cliente.js
function obtenerPedidos() {
  return listadePedidos;
}

function obtenerTotal() {
  return totalAcumulado;
}

/* PARTE DOS 

destructing: {precio} en vez de poner objeto p y .precio

*/


function caja() { 
  const subtotal = listadePedidos.reduce((acum, { subtotal }) => acum + subtotal, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  const listaPedidos = listadePedidos.map(({ producto, precio, cantidad, subtotal }) => ({
    producto,
    precio,
    cantidad,
    subtotal
  }));
  
  return {
    listaPedidos,
    subtotal,
    iva,
    total
  }
}

/* PARTE TRES: Marcar pedido realizado o rechazado*/

function validarYProcesarPedido(nombreProducto, callback) {
    console.log(`\nCaja: Consultando disponibilidad de '${nombreProducto}' con la cocina...`);
    cocina.procesoCocina(nombreProducto)
        .then((mensajeExito) => {
          // primero parametro lee error, segundo exito
            callback(null, `PEDIDO CONFIRMADO: ${mensajeExito}`);
        })
        .catch((mensajeError) => {
            // Usamos el callback -> primer parámetro recibe el error
            callback(`PEDIDO CANCELADO: ${mensajeError}`, null);
        });
}

module.exports = {agregarPedido,obtenerPedidos,obtenerTotal,caja,validarYProcesarPedido};
