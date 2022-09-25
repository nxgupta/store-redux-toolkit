// slice must be registered in cart
import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";



const cartSlice= createSlice({
    name: 'cart',
    initialState: [],
    reducers :{
        //reducers are actually pure functions which we use to mutate the state
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((element)=>(element.id!==action.payload))
        }
    }
})

export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;

