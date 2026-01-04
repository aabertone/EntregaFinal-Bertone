import { useState } from 'react'

const ItemCount = () => {

    const [count, setCount] = useState(0)

    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        if (count > 0) {
            setCount(count - 1)
        }}

  return (
    <div>
        <p>Cantidad:{count}</p>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
    </div>
  )
}

export default ItemCount