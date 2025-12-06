import React from 'react'
import ItemFilter from '../ItemFilter/ItemFilter';
import { getProductosFiltrados } from '../../Productos';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemFilterContainer = () => { 
    const { cat } = useParams();
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    useEffect(() => {
      getProductosFiltrados(cat)
      .then(respuesta => setProductosFiltrados(respuesta))
    }, [cat])


  return (
    <div>
        <h2>{cat}</h2>
        <ItemFilter productosFiltrados={productosFiltrados}/>
    </div>
  )
}

export default ItemFilterContainer