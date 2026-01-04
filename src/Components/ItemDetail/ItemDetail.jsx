import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, precio, img, desc}) => {
  return (
    <div className="itemdetail">
        <h2>Nombre: {nombre}</h2>
        <img src={img} alt={nombre} />
        <p>Precio: {precio}</p>
        <p>Id: {id}</p>
        <p>Descricpión: {desc}</p>
        <ItemCount />
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail