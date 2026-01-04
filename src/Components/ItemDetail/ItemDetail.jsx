import React from 'react'
import './ItemDetail.css'
import { carrito } from "../../Providers/CartContext"
import { useContext } from "react"
import { useState } from 'react'

const ItemDetail = ({id, nombre, precio, img, desc}) => {

  const valoractual = useContext(carrito)
  const [count, setCount] = useState(0)

  const agregarAlCarrito = () => {
    if (count <= 0) return
    const item = { id, nombre, precio, img, desc }
    valoractual.addItem(item, count)
    setCount(0)
  }
  
  const incrementar = () => {
      setCount(c => c + 1)
  }

  const decrementar = () => {
      setCount(c => Math.max(0, c - 1))
  }

  return (
    <div className="itemdetail">
        <h2>Nombre: {nombre}</h2>
        <img src={img} alt={nombre} />
        <p>Precio: USD {precio}</p>
        <p>Id: {id}</p>
        <p>Descricpión: {desc}</p>
        <p>Cantidad:{count}</p>
        <div className="botones">
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        </div>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail