let listadePedidos = [];
let totalAcumulado = 0;

function agregarPedido(producto, precio,cantidad) {
  const subtotal = precio * cantidad;
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

module.exports = {
  agregarPedido,
  obtenerPedidos,
  obtenerTotal
};