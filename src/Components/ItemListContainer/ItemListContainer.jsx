import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../Productos'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
    .then(respuesta => setProductos(respuesta))
  },[])
  
  return (
    <main>
        <h2>Bienvenido a la tienda DC</h2>
        <ItemList productos={productos}/>
    </main>
  )
}

export default ItemListContainer