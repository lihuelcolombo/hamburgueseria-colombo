let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');




mostrarProductos(menu)

function mostrarProductos(array){
    array.forEach(producto => {
        let div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `    <div class="row">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${producto.nombre}</span>
                    <p>Se acompaña con nuestras famosas papas fritas!</p>
                    </div>
                    <div class="card-action">
                        <a id = "botonAgregar${producto.id}" class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">+</i></a>                  
                    </div>
                </div>
            </div>
        </div>
    `
    contenedorProductos.appendChild(div);

    let btnAgregar = document.getElementById (`botonAgregar${producto.id}`)
    
    btnAgregar.addEventListener('click', () => {
        agregarAlPedido(producto.id)
    } 
    )
    }
    )
}


function agregarAlPedido(id) {
    
    let agregarProducto = menu.find(item => item.id == id)
    
    carritoDeCompras.push(agregarProducto);

    actualizarPedido()

    let div = document.createElement('div')
    div.classList='productoEnCarrito'
    div.innerHTML = `
                    <p>${agregarProducto.nombre}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <p>Cantidad: ${agregarProducto.cantidad}</p>
                    <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)
    actualizarPedido()  

}




function actualizarPedido() {
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce ((acc, el) => acc + (el.precio * el.cantidad),0) 

}