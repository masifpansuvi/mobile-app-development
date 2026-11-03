import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        username: '',
        password: '',
        isLoggedIn: false    
    },
    reducers: {
        login(state, action){
            state.username = action.payload.username,
            state.password = action.payload.password,
            state.isLoggedIn = true
        },
        logout(state, action){
            state.username = '',
            state.password = '',
            state.isLoggedIn = false
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer