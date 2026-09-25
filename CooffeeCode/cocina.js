let menu = [
    {producto: "café", precio: 50, tipo: "bebidas",estado: "listo"},
    {producto: "moka frappuccino", precio: 40, tipo: "bebidas", estado: "faltaIngrediente"},
    {producto: "cheescake", precio: 80, tipo: "postres",estado: "errorC"},
    {producto: "pastel", precio: 50,tipo: "postres",estado: "faltaIngrediente"}

];



function mostrar() {
    for (let i = 0; i < menu.length; i++) {
        console.log (menu[i].producto + ": $" + menu[i].precio);

    }
}

function agregarProducto(nombre, precio) {
    // agregar tipo
    menu.push({producto: nombre, precio: precio});
}

function editaryBorrar() {
    menu[1].precio = 75;
    menu.splice(0, 1);
        //SPLICE: Borra parte de arreglo 
}

/* PARTE DOS 

for each: devuelve undefined en arreglos exportados
map: devuelve un nuevo arreglo con los resultados 

*/

function buscarPostres(){
    let postres = menu.filter(p => p.tipo == "postres");
    return postres.map(p => (p.producto + ": $" + p.precio));
        
}

function buscarBebidas() {
        let bebidas = menu.filter(p => p.tipo == "bebidas");
        return bebidas.map(p => (p.producto + ": $" + p.precio));
}

function productosBaratos() {
        let baratos = menu.filter (p => p.precio <  80)
        return baratos.map  (p => (p.producto + " $" + p.precio));
}

function productosCaros() {
        let caros = menu.filter (p => p.precio >= 80 )
        return caros.map(p => (p.producto + " $" + p.precio));
}
        /* Parte tres */


    function procesoCocina(nombreProd){
            const prod = menu.find(prodprocesado => prodprocesado.producto === nombreProd);

            if(!prod){
                return Promise.reject("El producto no está en menú");
            }
            if(prod.estado == "errorC"){
                return errorCocina(prod.estado);
            } else if (prod.estado == "faltaIngrediente"){
                return faltaIngrediente(prod.estado);
            } else {
                return Promise.resolve("Producto en proceso correcto");
            }
        }
function errorCocina(estado) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {

            if (estado == "errorC") {
                reject("Error en cocina");
            } else {
                resolve("No hubo errores en cocina");

            }

            }, 1000);
        });
      }

      function faltaIngrediente(estado) {

        return new Promise(function(resolve, reject) {
            setTimeout(function() {

                if (estado == "faltaIngrediente") {
                    reject("Falta un ingrediente para poder preparar el café");
                    
                    } else {
                        resolve("Ingredientes disponibles");
                    }
                }, 1000);
            });
        }

        

module.exports = {menu, mostrar, editaryBorrar, 
    agregarProducto, buscarPostres, buscarBebidas, 
    productosBaratos, productosCaros,
    faltaIngrediente,procesoCocina,errorCocina};
