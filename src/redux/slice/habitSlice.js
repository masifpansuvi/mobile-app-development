const habitSLice = createSlice({
    name: 'habit',
    initialState: {
        value: []
    },
    reducers: {
        addHabit(state, action){
            state.value.push(action.payload)
        },
        deleteHabit(state, action){
            state.value.filter(val => val.id !== action.payload)
        },
        doneHabit(state, action){
            state.value
        }
    }
})