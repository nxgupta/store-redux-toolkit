// slice must be registered in store
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});

const productSlice= createSlice(
    
    {
        name:'products',
        initialState:{
            data:[],
            status:STATUSES.IDLE,
        },
        reducers:{
            setPrdoducts(state,action){
                //reducers are pure fuctions and synchronous, hence no side effect should be their
                //if(state.data.contains(action))
                state.data=action.payload
            },
            setStatus(state,action){
                state.status=action.payload
            }
        },
        extraReducers: (builder)=>{
            builder
            .addCase(getProducts.pending, (state,action)=>{
                state.status= STATUSES.LOADING;
            })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.status=STATUSES.IDLE;
            } )
            .addCase(getProducts.rejected,(state,action)=>{
                state.status=STATUSES.ERROR;
            })
        }

    }
);
export const {setPrdoducts, setStatus} =productSlice.actions;
export default productSlice.reducer;


//thunk is a higher order function, and returns an async function (A PIECE OF CODE THAT DOES DELAYED WORK)

// export function getProducts(){
//     return async function getProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try{
//             let res=await axios.get('https://dummyjson.com/products');
//             dispatch(setPrdoducts(res.data.products))
//             console.log(res.data.products)
//             dispatch(setStatus(STATUSES.IDLE))
//         }
//         catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

export const getProducts = createAsyncThunk('products/getData', async ()=>{
    const res=await axios.get('https://dummyjson.com/products')
    return res.data.products;
})