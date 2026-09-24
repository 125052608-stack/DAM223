let menu = [
    {producto: "café", precio: 50},
    {producto: "moka frappuccino", precio: 40},
    {producto: "cheescake", precio: 80},
    {producto: "pastel", precio: 50}
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

/* PARTE DOS 

for each: devuelve undefined en arreglos exportados
map: devuelve un nuevo arreglo con los resultados 

*/

function buscarPostres(){
    let postres = menu.filter(p => p.tipo == "postres");
    return postres.map(p => console.log(p.producto + ": $" + p.precio));
        
}

function buscarBebidas() {
        let bebidas = menu.filter(p => p.tipo == "bebidas");
        return bebidas.map(p => console.log(p.producto + ": $" + p.precio));
}

function productosBaratos() {
        let baratos = menu.filter (p => p.precio <  80)
        return baratos.map  (p => console.log(p.producto + " $" + p.precio));
}

function productosCaros() {
        let caros = menu.filter (p => p.precio >= 80 )
        return caros.map(p => console.log(p.producto + "$" + p.precio));
}

module.exports = {menu, mostrar, editaryBorrar, agregarProducto, buscarPostres, buscarBebidas, productosBaratos, productosCaros};
