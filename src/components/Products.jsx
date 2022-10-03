import React, { useEffect, useState } from 'react'

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [cart])

  const addToCart = (id) => {
    const item = products.find((post) => post.id === id)
    const existingItem = cart.find((item) => item.id === id)

    if (existingItem) {
      const result = cart.map((x) => {
        if (x.id === existingItem.id) {
          item.qty++
          return item
        } else {
          return x
        }
      })
      setCart(result)
      console.log(result)
    } else {
      setCart((prev) => [...prev, item])
    }
  }
  return (
    <div className="productContainer">
      {products.map((product) => (
        <div key={product.id} className="productBox">
          <div className="imgDiv">
            <img src={product.thumbnail} alt="productitem" />
          </div>
          <p>{product.title}</p>
          <div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products
