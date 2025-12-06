import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../Productos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto(id)
        .then(respuesta => setProducto(respuesta))
    },[]);

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer