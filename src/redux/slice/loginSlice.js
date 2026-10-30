import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLoggedIn: false
}

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(_state, action){
            return {
                user: action.payload,
                isLoggedIn: true
            }
        },
        logout(){
            return initialState
        }
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer