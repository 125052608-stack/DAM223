let listadePedidos = [];
let totalAcumulado = 0;

function agregarPedido(producto, precio,cantidad) {
  const subtotal = precio * cantidad;
  // se usa destructing aqui
  listadePedidos.push({ producto, precio, cantidad, subtotal});

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
module.exports = {agregarPedido,obtenerPedidos,obtenerTotal,caja};
