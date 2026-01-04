import React from 'react'
import Articulos from '../Articulos/Articulos'
import './ItemFilter.css'

const ItemFilter = ({ productosFiltrados }) => {
  if (!productosFiltrados || productosFiltrados.length === 0) {
    return <div className="cargando">Cargando</div>
  }

  return (
    <div className="itemsfiltrados">
        {productosFiltrados.map((articulo) => (<Articulos key={articulo.id} {...articulo} />))}
    </div>
  )
}

export default ItemFilter