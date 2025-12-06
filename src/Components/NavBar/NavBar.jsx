import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <h1>Tienda DC</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/cat/Maquinas">Maquinas</Link>
          </li>
          <li>
            <Link to="/cat/Accesorios">Accesorios</Link>
          </li>
          <li>
            <Link to="/cat/Consumibles">Consumibles</Link>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
    
  )
}

export default NavBar