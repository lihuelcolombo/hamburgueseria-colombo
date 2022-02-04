let menu = [
    {id: 1, nombre: "Hamburguesa simple ($600)", tipo: "Hamburguesa", precio: 600},
    {id: 2, nombre: "Hamburguesa con lechuga y tomate ($700)", tipo: "Hamburguesa", precio: 700},
    {id: 3, nombre: "Hamburguesa con queso ($700)", tipo: "Hamburguesa", precio: 700},
    {id: 4, nombre: "Hamburguesa completa ($800)", tipo: "Hamburguesa", precio: 800},
    {id: 5, nombre: "Hamburguesa vegana ($700)", tipo: "Hamburguesa", precio: 700},
    {id: 6, nombre: "Pancho simple ($200)", tipo: "Hamburguesa", precio: 200},
    {id: 7, nombre: "Pancho con lluvia de papas ($300)", tipo: "Pancho", precio: 300},
    {id: 8, nombre: "Pancho con jamon y queso ($300)", tipo: "Pancho", precio: 300},
    {id: 9, nombre: "Pancho completo ($400)", tipo: "Pancho", precio: 500},
    
]

confirm ("Hamburguesería Brew te da la bienvenida!");

let pedido = [];
let item = 0;
let cantidadItem = 0;

agregarAlPedido();

function agregarAlPedido() {;

    let productoElegido = parseInt(prompt('Ingresá el número de orden de tu plato:\n\n #1: Hamburguesa simple ($600) \n #2: Hamburguesa con lechuga y tomate ($700) \n #3: Hamburguesa con queso ($700) \n #4: Hamburguesa completa ($800)\n #5: Hamburguesa vegana ($700) \n #6: Pancho simple ($200)\n #7: Pancho con lluvia de papas ($300) \n #8: Pancho con jamon y queso ($300) \n #9: Pancho completo ($400)'));

    let productoAgregar = menu.find((el) => el.id == productoElegido);
    pedido.push(productoAgregar);
    
    
    console.log(pedido);
    actualizarPedido();
    
}

function actualizarPedido() {
    
    
    console.log('Cantidad de productos agregados ' + pedido.length);
    let suma = pedido.reduce((acc, el) => acc + el.precio, 0);

    console.log('La suma total de su Carrito es $' + suma);
}

