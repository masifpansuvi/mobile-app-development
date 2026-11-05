import { createSlice } from '@reduxjs/toolkit'

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        detail : []
    },
    reducers: {
        addTransaction(state, action){
            state.detail.push(action.payload)
        },
        clearTransaction(state){
            state.detail = []
        }
    }
})

export const { addTransaction, clearTransaction } = transactionSlice.actions
export default transactionSlice.reducer