import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/slice/userSlice';
import { clearCart } from '../redux/slice/productSlice';

const Users = () => {
  const [username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const usersProfile = useSelector(state => state.users)
  

  const loginUser = () => {
    dispatch(login({username, password}))
    console.log(usersProfile)
    setUsername('')
    setPassword('')
  }
  const logoutUser = () => {
    dispatch(clearCart())
    dispatch(logout())
    console.log(usersProfile)
  }
  useEffect(() => {
    console.log('usersProfile changed:', usersProfile);
  }, [usersProfile]);

  return ( 
    <View style={{padding: 20, paddingHorizontal: 12,  }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Profile</Text>
      <Text>enter username</Text>
      <TextInput 
      placeholder='Enter username'
      value={username}
      onChangeText={setUsername}
      style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
      />
      <Text>enter username</Text>
      <TextInput 
      placeholder='Enter password'
      value={password}
      onChangeText={setPassword}
      style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity 
        disabled={username == '' || password == ''}
        onPress={loginUser}
        style={{backgroundColor: '#8C3A09', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 10}}><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity
        onPress={logoutUser} 
        style={{backgroundColor: '#8C3A09', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 10}}><Text>Logout</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Users;
