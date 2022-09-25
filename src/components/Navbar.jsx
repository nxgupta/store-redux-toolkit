import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate=useNavigate();
  const items=useSelector((state)=>{return state.cart});
  return (
    <React.Fragment>
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <span className='heading'>Shopping Store</span>
        <div>
        <button className='navLink' onClick={()=>navigate('/')}>Home</button>
        <button className='navLink' onClick={()=>navigate('/cart')}>Cart</button>
        <span className='cartCount'>Cart items : {items.length}</span>
        </div>
    </div>
    
    </React.Fragment>
  )
}

export default Navbar
