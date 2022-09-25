import React, { useEffect, useState } from 'react';
import {add} from '../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux';
import { getProducts,STATUSES } from '../store/productSlice';
import { useSnackbar } from "notistack";
import {CircularProgress} from '@mui/material';
import {Box} from '@mui/system'

const Products = () => {
    const {enqueueSnackbar} =useSnackbar()
    const dispatch=useDispatch();
    //get productList
    const {data:productsList,status} =useSelector((state)=>(state.products))

    //get cartItems
    const cartItem = useSelector((state)=>(state.cart));
    console.log(cartItem)

    //run getProducts function--->which basically calls api;
    useEffect(()=>{
      dispatch(getProducts());    
    },[])
    const handleAdd=(product)=>{
      let itemPresent=false;
      cartItem.forEach(item=>{
          if(item.id===product.id){
              itemPresent=true;
          }
      })
      console.log(itemPresent)
      itemPresent===false?dispatch(add(product)):enqueueSnackbar('Item is already present in the Cart',{variant:'error'})
    }
  
  if (STATUSES.LOADING===status){
    return (
      <Box sx={{ display: 'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', height:'70vh', width:'100vw'}}>
      <CircularProgress />
      <p>Loading Products</p>
      </Box>)}

  if (STATUSES.ERROR===status){
    return (
    <Box  sx={{ display: 'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', height:'70vh', }}>
    <button className='btn'>Something went wrong, click to Refresh</button>
    </Box>)}

  return (
    <div className='productsWrapper'>
      {productsList.map(product=>(
        <div className='card' key={product.id}>
          <img src={product.thumbnail} alt='image'/>
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
        </div>)
      )
    }
    </div>
  )
}
export default Products
