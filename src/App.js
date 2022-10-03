import React, { useEffect, useState } from 'react'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import Products from './components/Products'
import './style.css'

const App = () => {
  const [cart, setCart] = useState([])
  const [show, setShow] = useState(false)

  const openCartHandler = () => {
    setShow((prev) => !prev)
  }

  return (
    <>
      <NavBar openCartHandler={openCartHandler} cart={cart} />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} show={show} />
    </>
  )
}

export default App
