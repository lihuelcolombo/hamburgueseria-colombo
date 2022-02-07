// ===== MENU COMO ARRAY DE OBJETOS =====
let menu = [
    {id: 1, nombre: "Hamburguesa simple ($600)", precio: 600, cantidad: 0, subtotal: 0},
    {id: 2, nombre: "Hamburguesa con lechuga y tomate ($700)", precio: 700, cantidad: 0, subtotal: 0},
    {id: 3, nombre: "Hamburguesa con queso ($700)", precio: 700, cantidad: 0, subtotal: 0},
    {id: 4, nombre: "Hamburguesa completa ($800)", precio: 800, cantidad: 0, subtotal: 0},
    {id: 5, nombre: "Hamburguesa vegana ($700)", precio: 700, cantidad: 0, subtotal: 0},
    {id: 6, nombre: "Pancho simple ($200)", precio: 200, cantidad: 0, subtotal: 0},
    {id: 7, nombre: "Pancho con lluvia de papas ($300)", precio: 300, cantidad: 0, subtotal: 0},
    {id: 8, nombre: "Pancho con jamon y queso ($300)", precio: 300, cantidad: 0, subtotal: 0},
    {id: 9, nombre: "Pancho completo ($400)", precio: 400, cantidad: 0, subtotal: 0},
    
]

// ===== CLASE CONSTRUCTORA =====

class Pedido {
    constructor(id, nombre, precio, cantidad, subtotal) {
        this.id = id,
        this.nombre = nombre,        
        this.precio = precio,
        this.cantidad = cantidad,
        this.subtotal = precio * cantidad
    }
}

// ===== VARIABLES =====

const pedido = [];
let cantidadItem = 0;
let productoElegido = 0;
let productoAgregar = 0;

// ===== INICIO =====

confirm ("Hamburguesería Brew te da la bienvenida!");

agregarAlPedido();


// ===== FUNCIONES =====

function agregarAlPedido() {
    
    productoElegido = parseInt(prompt("Ingresá el número de orden de tu plato:\n\n #1: Hamburguesa simple ($600) \n #2: Hamburguesa con lechuga y tomate ($700) \n #3: Hamburguesa con queso ($700) \n #4: Hamburguesa completa ($800)\n #5: Hamburguesa vegana ($700) \n #6: Pancho simple ($200)\n #7: Pancho con lluvia de papas ($300) \n #8: Pancho con jamon y queso ($300) \n #9: Pancho completo ($400)"));

    
    productoAgregar = menu.find((el) => el.id == productoElegido);
    
    cantidadItem = parseInt (prompt("Elegiste " + productoAgregar.nombre + "\n¿Cuántas unidades querés? Ingresalo en números", 1 ));


    const pedido = new Pedido (productoAgregar.id, productoAgregar.nombre, productoAgregar.precio, cantidadItem, this.precio * this.cantidad);
    
    pedido.push 

    console.log(pedido);
    sumarProducto();
    
}


function sumarProducto() {
    let otroProducto = parseInt(prompt ("Querés agregar otro plato a tu pedido? Ingresá la opción deseada en números. \n#1: Sí, agregar otro plato. \n#2 No, finalizar pedido."))
    if (otroProducto == 1) {
        agregarAlPedido()
    } else if (otroProducto == 2) {
        finalizarPedido()
    } else {
        alert ("Ingresaste una opción inválida.");
        sumarProducto();
    }
}


function finalizarPedido() {
    
    // EL TOTAL DA SIEMPRE 0, REVISAR
    let total = pedido.reduce((acc, el) => acc + el.subtotal, 0);
    console.log(total);
    alert ("El monto total de tu pedido es: $" + total + "\nPodés abonar en efectivo o con Mercado Pago.");

}

