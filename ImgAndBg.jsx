import React, { useState } from 'react'
import { Image, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';

export default function ImgAndBg(){ 
    const [userName, setUserName] = useState("")
    const [ password, setPassword ] = useState("") 
    const isDisabled = () => {
        return !(userName.trim().length > 0 && password.trim().length > 0);
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{}}>
                <LinearGradient 
                colors={['#38C7FF', '#FFC9AC', '#CC56A7']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{width: '100%', height: '100%'}}
                > 
                 <View style={{width: '100%', height: '30%', alignItems: 'center', top: 100}}>
                    <View style={{}}>
                        <Image source={require('./Image/login-pic.png')} style={{ width: 100, height: 100}} />
                    </View>  
                </View>
                <View style={{ flex: 0.2, marginHorizontal: 40, gap: 30,  }}>
                    <View style={{ borderBottomWidth: 4, borderColor: '#3DADF2'}}>
                        <TextInput 
                        placeholder="Enter Your Username"
                        placeholderTextColor="#3DADF2" 
                        style={{fontSize: 16, fontWeight: 'bold', left: 10, color: 'black'}}
                        value={userName}
                        onChangeText={text => setUserName(text)}
                         />
                    </View>
                    <View style={{ borderBottomWidth: 4, borderColor: '#3DADF2', }}>
                        <TextInput 
                        placeholder="Create Strong Password"
                        placeholderTextColor="#3DADF2" 
                        style={{fontSize: 16, fontWeight: 'bold', left: 10, color: 'black'}}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity 
                    disabled = {isDisabled()}
                    onPress={() => Alert.alert('Clickable')} 
                    style={{ backgroundColor: isDisabled ?   'red' : '#3DADF2',  padding: 16, borderRadius: 25, }}>
                        <Text
                        style={{fontSize: 20, fontWeight: 'bold', textAlign: "center", color: 'white'}}>Sign Up</Text>
                    </TouchableOpacity >
                    <View style={{ marginHorizontal: 30, padding: 12}} ><Text style={{textAlign: 'center', color: '#3FA9FF', fontWeight: 'bold'}}>Lorem Ipsum</Text></View>
                </View>
                </LinearGradient>
                
            </SafeAreaView>
        </SafeAreaProvider>
        
        
    )
}