import { createSlice } from "@reduxjs/toolkit";

const earningsSlice = createSlice({
    name: 'earnings',
    initialState: {
        cash: []
    },
    reducers: {
        addEarnings(state, action){
            state.cash.push(action.payload)
        },
        clearEarning(state){
            state.cash = []
        },
    }
})

export const { addEarnings, clearEarning, totalBalance } = earningsSlice.actions
export default earningsSlice.reducer