import React from 'react'
import Articulos from '../Articulos/Articulos'
import './ItemList.css'

const ItemList = ({productos}) => {
  if (!productos || productos.length === 0) {
    return <div className="cargando">Cargando</div>
  }
  return (
    <div className="producard">
        {productos.map(articulo => <Articulos key={articulo.id} {...articulo} />)}
    </div>
  )
}

export default ItemList