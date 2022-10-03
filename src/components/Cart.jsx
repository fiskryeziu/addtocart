import React from 'react'

const Cart = ({ cart, show }) => {
  return (
    <div className={show ? 'cartContainer show' : 'cartContainer'}>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <strong>{item.qty}</strong> → {item.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
