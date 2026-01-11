import './Articulos.css'
import { Link } from 'react-router-dom'

const Articulos = ({id, cat, nombre, precio, img}) => {
  return (
    <div className="articulo">
        <div className="articuloimg">
          <img src={img} alt={nombre} />
        </div>
        <div className="articuloinfo">
          <h3>{nombre}</h3>
          <p>Precio: {precio}</p>
          <Link to={`/detalle/${id}`}><button>Ver Detalles</button></Link>
        </div>
    </div>
  )
}

export default Articulos