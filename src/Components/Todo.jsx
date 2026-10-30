import { Text, TextInput, TouchableOpacity, View, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleTodo } from '../redux/slice/todosSlice'

    const Todo = () => {
        const [text, setText] = useState("")
        const todos = useSelector(state => state.todos)
        const dispatch = useDispatch()
        console.log(todos)
        
        const handleTodo = () => {
            if (text.trim() === '') return
                dispatch(addTodo(text))
                setText('')
                     
        } 

    return (
        <View style={{flex: 1, padding: 20,}}>
            <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold'}}>TODO APP</Text>
            <TextInput 
            placeholder='Enter a Todo'
            value={text}
            onChangeText={setText}
            // onKeyPress={(e) => console.log('Key:', e.nativeEvent.key)}
            style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
            />
            <TouchableOpacity onPress={handleTodo} style={{}}><Text>Add Todo</Text></TouchableOpacity>
            {/* <ScrollView>
                {todos.map((item) => (
                    <View
                    key={item.id}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}
                    >
                    <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                        <Text
                        style={item.done ? { fontSize: 18, color: 'red' } : { fontSize: 18 }}
                        >
                        {item.text}
                        </Text>
                    </TouchableOpacity>
                    <Button title="Delete" onPress={() => dispatch(removeTodo(item.id))} />
                    </View>
                ))}
            </ScrollView> */}
        </View>
    )
    }

    export default Todo;