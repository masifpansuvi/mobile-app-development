const noteSlice = createSlice({
    name: 'notes',
    initailState: {
        list: []
    },
    reducers: {
        addNote(state, action){
            state.list.push(action.payload)
        },
        removeNote(state, action){
            state.filter(item => item.id !== action.payload)
        },
        
    }
})