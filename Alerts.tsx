import { useState } from 'react'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context'

export default function AppContent(){
    const [ count, setCount] = useState(0);

    const timeTapped = () => {
        Alert.alert("Add Number", "Wanna Add", [
            {
                text: "Add",
                onPress: () => {
                    setCount(count => count + 1);
                }
            },
            {
                text: "Subtract",
                onPress: () => {
                    setCount(count => count - 1)
                }
            }
        ])
    }
    const resetCount = () => {
        Alert.alert("Reset Count", "", [
            {
                text: "Reset",
                onPress: () => {
                    setCount(0)
                }
            }
        ])
    }
    
    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: '10'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', gap: 10, padding: 20}}>
                    <Text style = {{fontSize: 30 }}>Times Tapped</Text>
                    <Text style = {{fontSize: 50, fontWeight: '600' }}>{count}</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 100}}>
                    <TouchableOpacity onPress = {timeTapped} 
                    style={{ paddingVertical: 12, paddingHorizontal: 50, borderWidth: 2, borderColor: 'gray', borderRadius: 10,}}>
                        <Text style={{fontSize: 20, fontWeight: 'semibold'}}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={resetCount}
                    style={{paddingVertical: 12, paddingHorizontal: 50, borderWidth: 2, borderColor: 'gray', borderRadius: 10, }} >
                        <Text style={{fontSize: 20, fontWeight: 'semibold'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

