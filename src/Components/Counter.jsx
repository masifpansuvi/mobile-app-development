import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFive, addition, decrement, increment, reset } from '../redux/slice/todosSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <View style={{margin: 20}}>
      <Text>Counter {count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(reset())}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(addFive(10))}>
        <Text>Add Five</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter;