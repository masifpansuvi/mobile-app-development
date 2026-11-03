import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'carts',
    initialState: 0,
    reducers: {
        increaseQty(state, action){
            state = state + 1
        },
        decreaseQty(state, action){
            state = state - 1
        }
    }
})

export const {increaseQty, decreaseQty } = cartSlice.actions
export default cartSlice.reducer


