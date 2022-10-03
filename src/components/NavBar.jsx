import React from 'react'

const NavBar = ({ openCartHandler, cart }) => {
  return (
    <nav>
      <ul>
        <li onClick={openCartHandler}>
          <button data-cartcount={cart.length}>Cart</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
