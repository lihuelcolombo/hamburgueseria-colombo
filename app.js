// Carrito de compras

let carritoDeCompras = []
let carritoStorage = [];


const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');


document.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("carrito")) {
        carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))
        actualizarPedido();
    }
}
)

// Fetch del menu
const menu = []
fetch ('menu.json')
    .then( (res) => res.json())
    .then ( (data) => {
        data.forEach(item => {
            menu.push(item);
        })
        
    })

setTimeout (() => {
    mostrarProductos(menu)
},1000 )


// Funciones

function mostrarProductos(array){

    if (localStorage.getItem("carrito")) {
        carritoStorage = JSON.parse(localStorage.getItem("carrito"))        
        carritoStorage.map((producto) => {
            let div = document.createElement('div')
    div.classList='productoEnCarrito'
    div.innerHTML = `
                    <p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button id="btnEliminar${producto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `;
    contenedorCarrito.appendChild(div);

    actualizarPedido(carritoStorage)

    let btnEliminar = document.getElementById (`btnEliminar${producto.id}`)
    btnEliminar.addEventListener('click', () => {        
        btnEliminar.parentElement.remove();
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != producto.id)
        actualizarPedido();
    })
    })
    }


    contenedorProductos.innerHTML = "";

    array.forEach(producto => {

        const {nombre, id, precio, desc, img} = producto;

        let div = document.createElement('div');
        div.classList = 'producto';
        div.innerHTML = `   
        <div class="col s12 m6 l4">
            <div class="card">
            <div class="card-image">
                <img src="${img}">
                <span class="card-title">${nombre}</span>
                
                <a id="botonAgregar${id}" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">+</i></a>
                
            </div>
            <div class="card-content">
                <p class="precio-card">$${precio}</p>
                <p>${desc}</p>
                <p>Se acompaña con nuestras famosas papas fritas!</p>
            </div>
            </div>
        </div>


        
    `
    contenedorProductos.appendChild(div);

    let btnAgregar = document.getElementById (`botonAgregar${producto.id}`)
    

    btnAgregar.addEventListener('click', () =>{
        Toastify({
            text:"Se añadió un nuevo plato a tu pedido",
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            style: {
                    background: '#24a39d'
                }
        }).showToast();    
    }) 


    btnAgregar.addEventListener('click', () => {
        agregarAlPedido(producto.id)
    })
    })
}


function agregarAlPedido(id) {
    
    let agregarProducto = menu.find(item => item.id == id)
    
    
    carritoDeCompras.push(agregarProducto);

    actualizarPedido()

    let { nombre , precio, cantidad} = agregarProducto

    let div = document.createElement('div')
    div.classList='productoEnCarrito'
    div.innerHTML = `
                    <p>${nombre}</p>
                    <p>Precio: $${precio}</p>
                    <p>Cantidad: ${cantidad}</p>
                    <button id="btnEliminar${agregarProducto.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById (`btnEliminar${agregarProducto.id}`)

    btnEliminar.addEventListener('click', () => {
        
        btnEliminar.parentElement.remove();

        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != agregarProducto.id)
        actualizarPedido();
    })

    actualizarPedido()  

}


function actualizarPedido() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc,el) => acc + el.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce ((acc, el) => acc + (el.precio * el.cantidad),0); 

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))    
    
} 

