import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice'

const Cart = () => {
  const cartItems=useSelector((state)=>(state.cart));
  const dispatch=useDispatch();

  const handleRemove=(productId)=>(
    dispatch(remove(productId)
  )
  )
  return (
    <div>
      <h3>Cart</h3>
      <div>
      {cartItems.length===0?
        (<div style={{ display: 'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', height:'70vh', width:'100vw'}}>
            Cart is Empty, Please add some Products
          </div>):
        (cartItems.map(item=>(
          <div className='cartCard' key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <h5>${item.price}</h5>
            <button onClick={()=>handleRemove(item.id)} className='btn'>Remove</button>
          </div>
        )))
      }
      </div>

    </div>
  )
}

export default Cart
