export const productos = [
    {id: 1, cat: "Accesorios", nombre: "Compresor", precio: 3000, img: "../public/img/compresor.jpg", desc: "Compresor de gas para CRAH de 35kw"},
    {id: 2, cat: "Consumibles", nombre: "Filtro", precio: 15, img: "../public/img/filtro.jpg", desc: "Filtro de aire Merv10"},
    {id: 3, cat: "Maquinas", nombre: "CRAH 1", precio: 5000, img: "../public/img/crah1.jpg", desc: "CRAH tipo downflow up de 55kW"},
    {id: 4, cat: "Maquinas", nombre: "CRAH 2", precio: 5000, img: "../public/img/crah2.jpg", desc: "CRAH tipo fanwall de 55kw"},
    {id: 5, cat: "Maquinas", nombre: "Bomba", precio: 2000, img: "../public/img/bomba.jpg", desc: "Bomba de agua 10HP"},
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    const pid = Number(id);
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const producto = productos.find(prod => prod.id === pid)
            resolve(producto)
        }, 2000)
    })
}

export const getProductosFiltrados = (cat) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const productosFiltrados = productos.filter(prod => prod.cat === cat)
            resolve(productosFiltrados)
        }, 2000)
    })
}