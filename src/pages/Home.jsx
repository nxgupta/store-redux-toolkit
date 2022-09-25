import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h4 className='heading'>Welcome to the Store</h4>
        <section>
            <h4>Products</h4>
            <Products />
        </section>
    </div>
  )
}

export default Home
