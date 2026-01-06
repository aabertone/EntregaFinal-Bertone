import React from 'react'
import { useContext, useState } from 'react'
import { carrito } from '../../Providers/CartContext'
import '../Carrito/Carrito.css'
import '../Articulos/Articulos.css'

const Carrito = () => {
    const { items, addItem, removeOne, removeItem, clearCart, getTotalPrice, cantidad } = useContext(carrito)
    const [compraOk, setCompraOk] = useState(false)
    
    if (compraOk) {
      return (
        <div className="cart empty">
          <h3>¡Gracias por su compra!</h3>
          <p>Procesando pedido...</p>
        </div>
      )
    }


    if (!items.length) return (
      <div className="cart empty">
        <h3>Carrito vacío</h3>
      </div>
    )

    const comprar = () => {
      clearCart()
      setCompraOk(true)

      setTimeout(() => {
      setCompraOk(false)
  }, 3000)
}


    return (
      <div className="cart">
        <h3>Carrito ({cantidad})</h3>
        <div className="cart-list">
          {items.map(i => (
            <article className="articulo" key={i.id}>
              <div className="articuloimg">
                <img src={i.img} alt={i.nombre} />
              </div>
              <div className="articuloinfo">
                <h4>{i.nombre}</h4>
                <p className="card-desc">{i.desc}</p>
                <p>Precio: USD {Number(i.precio).toFixed(2)}</p>
                <p>Cantidad: {i.quantity}</p>
                <p>Subtotal: USD {(Number(i.precio) * i.quantity).toFixed(2)}</p>

                <div className="card-actions">
                  <button onClick={() => addItem({ id: i.id, nombre: i.nombre, precio: i.precio, img: i.img, desc: i.desc }, 1)}>+</button>
                  <button onClick={() => removeOne(i.id)}>-</button>
                  <button className="btn-remove" onClick={() => removeItem(i.id)}>Eliminar</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="cart-footer">
          <p className="cart-total">Total: USD {getTotalPrice().toFixed(2)}</p>
          <div className="footer-btns">
            <button className="btn-clear" onClick={clearCart}>Vaciar carrito</button>
            <button className="btn-comprar" onClick={comprar}>Comprar</button>
          </div>
        </div>
      </div>
    )
}

export default Carrito