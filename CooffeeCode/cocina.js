let menu = [
    {producto: "café", precio: 50},
    {producto: "moka frappuccino", precio: 40},
    {producto: "cheescake", precio: 80}
];

function mostrar() {
    for (let i = 0; i < menu.length; i++) {
        console.log (menu[i].producto + ": $" + menu[i].precio);

    }
}

function agregarProducto(nombre, precio) {
    menu.push({producto: nombre, precio: precio});
}

function editaryBorrar() {
    menu[1].precio = 75;
    menu.splice(0, 1);

}

module.exports = {menu, mostrar, editaryBorrar, agregarProducto};