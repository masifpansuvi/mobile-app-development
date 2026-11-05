import { createSlice } from '@reduxjs/toolkit'

const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        transaction: []
    },
    reducers: {
        addTransaction(state, action){
            state.transaction.push(action.payload)
        },
        clearTransaction(state){
            state.transaction = []
        }
    }
})

export const { addTransaction, clearTransaction } = expenseSlice.actions
export default expenseSlice.reducer