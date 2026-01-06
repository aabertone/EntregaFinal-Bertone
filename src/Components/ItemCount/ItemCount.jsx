import React from 'react'

const ItemCount = ({count, incrementar, decrementar}) => {
  return (
        <div>
            <p>Cantidad:{count}</p>
                <div className="botones">
                    <button onClick={incrementar}>+</button>
                    <button onClick={decrementar}>-</button>
                </div>
        </div>
  )
}

export default ItemCount