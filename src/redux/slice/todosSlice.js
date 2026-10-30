import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action){
            state.user = action.payload            
        },
        removeTodo(state, action){
            return state.filter(item => item.id !== action.payload)
        },
        toggleTodo(state, action){
            const todo = state.find(item => item.id === action.payload )
            if (todo) {
                todo.done = !todo.done
            }
        },
         
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

// export const studentSlice = createSlice({
//     name: 'student',
//     initialState: {
//         list : []
//     },
//     reducers: {
//         addData(state, action){
//             state.list.push(action.payload)
//         }
//     }
// })

// export const { addData } = studentSlice.actions;
// export default studentSlice.reducer;

