import { createContext, useEffect, useState } from "react";

export const carrito = createContext();
const Provider = carrito.Provider;

const CartContext = ({children}) => {

    const [cantidad, setCantidad] = useState(0)
    const [items, setItems] = useState([])

    useEffect(() => {
      const total = items.reduce((s, it) => s + it.quantity, 0)
        setCantidad(total)
    }, [items])

    const addItem = (item, quantity = 1) => {
        if (!item || quantity <= 0) return
        setItems(prev => {
            const exists = prev.find(i => i.id === item.id)
            if (exists) {
                return prev.map(i => i.id === item.id ? {...i, quantity: i.quantity + quantity} : i)
            }
            return [...prev, {...item, quantity}]
        })
    }

    const removeOne = (id) => {
        setItems(prev => prev.flatMap(i => {
            if (i.id !== id) return i
            if (i.quantity > 1) return {...i, quantity: i.quantity - 1}
            return [] // si era 1, lo elimina
        }))
    }

    const removeItem = (id) => {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    const clearCart = () => setItems([])

    const getTotalPrice = () => items.reduce((s, i) => s + (i.precio || 0) * i.quantity, 0)

    const valorDelContexto = {
        cantidad,
        setCantidad,
        items,
        addItem,
        removeOne,
        removeItem,
        clearCart,
        getTotalPrice
    }
  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CartContext
