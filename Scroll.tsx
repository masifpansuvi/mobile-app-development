import { Image, ScrollView, Text, View, Platform, ImageBackground, TouchableOpacity, Alert, TextInput } from 'react-native'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context'


export default function ImgAndBg(){ 
    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 100,
        height: 80,
    };
    return (
        <ScrollView style={{}}>
            <Text style={{fontSize: 96}}>Plz Scroll Me</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            v<Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
        </ScrollView>
            
        
    )
}

{/*
] */}