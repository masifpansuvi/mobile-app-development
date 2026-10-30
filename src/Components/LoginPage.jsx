import { View, Text,TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/slice/loginSlice';
import Todo from './Todo.jsx'

const LoginPage = () => {
  const auth = useSelector(state => state.auth)
  const todos = useSelector(state => state.todos)
  const [email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  console.log("todos ====> ", todos)

  console.log(auth)
  const handleLogin = () => { 
    dispatch(login({
      email: email,
      password
    }))
    setEmail('')
    setPassword('')
  }
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
    <View style={{flex: .5, backgroundColor: 'gray', alignItems: 'center'}}>
      <View style={{width: '80%', height: '100%', borderColor: 'transparent', borderWidth:2, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10, gap: 6}}>
         <Text>Enter Your UseName</Text>
         <TextInput 
            placeholder='Enter Email'
            value={email}
            onChangeText={setEmail}
            // onKeyPress={(e) => console.log('Key:', e.nativeEvent.key)}
            style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', }}
            />
            <Text>Enter Password</Text>
         <TextInput 
            placeholder='Enter password'
            value={password}
            onChangeText={setPassword}
            // onKeyPress={(e) => console.log('Key:', e.nativeEvent.key)}
            style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb',}}
            />
          <TouchableOpacity><Text>Forget password?</Text></TouchableOpacity>
          <View style={{ flexDirection: 'column', gap: 4, }}>
            <Button title="Login" onPress={handleLogin} />
            <Button title="Log Out" onPress={handleLogout} />
          </View>
      </View>
    </View>
    <View style={{flex: 1, backgroundColor: 'red'}}>
      {isLoggedIn && <Todo />}
    </View>
    </>
  )
}

export default LoginPage