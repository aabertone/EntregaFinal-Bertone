import { useEffect, useState } from 'react'
import { getUnProducto } from '../../Productos'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto(id)
            .then(setProducto)
            .catch((error) => console.log(error));
    }, [id]);

  return (
    <div>
        {producto && <ItemDetail {...producto} />}
    </div>
  )
}

export default ItemDetailContainer