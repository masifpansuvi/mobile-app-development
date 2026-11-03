import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    elements: [],
  },
  reducers: {
    addProduct(state, action) {
      state.elements.push(action.payload)
    },
    AddQuantity(state , action){
      let index = state.elements.findIndex((item)=>item?.id == action.payload.id)
        state.elements[index].qty += 1;
        // state.elements[index].price = state.elements[index].price / (state.elements[index].qty - 1) * state.elements[index].qty
        // console.log("price====>", state.elements[index].price += )
      console.log("Index==>", index, "action.payload===>", action.payload)
         
    },
    deductQuantity(state , action){
      let index = state.elements.findIndex((item)=>item?.id == action.payload.id)
      if(state.elements[index]?.qty > 1){
        // state.elements[index].price = state.elements[index].price * (state.elements[index].qty - 1) / state.elements[index].qty
        
        state.elements[index].qty -= 1;
      }
      else{
        state.elements.splice(index,1)
      }
    },
    clearCart(state){
      state.elements = []
    }
  },
});

export const { addProduct , deductQuantity , AddQuantity, clearCart } = productSlice.actions;
export default productSlice.reducer;
