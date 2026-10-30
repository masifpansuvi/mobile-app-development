import { View, Text, TextInput, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
 
export default function Notes() {
    const notes = useSelector(state => state.list.notes)
    const [note, setNote ] = useState()
    console.log(notes)


  return (
    <View style={{flex: 1, padding: 10, paddingTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', }}>My Notes</Text>
      <View style={{flexDirection: 'row', width: '100%', gap: 10}}>
        <TextInput 
        placeholder='Enter a Note'
        value={note}
        onChangeText={setNote}
        style={{ flex: 8, borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, paddingTop: 10}}
        />
        <Button title="ADD"  style={{ flex: 2, borderRadius: 10}}/>
      </View>
        
         <ScrollView>
                {notes.map((n) => (
                    <View
                    key={n.id}
                    style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}
                    >
                    <TouchableOpacity>
                        <Text
                        style={item.done ? { fontSize: 18, color: 'red' } : { fontSize: 18 }}
                        >
                        {n.text}
                        </Text>
                    </TouchableOpacity>
                    <Button title="Delete" onPress={() => dispatch(removeTodo(n.id))} />
                    </View>
                ))}
            </ScrollView>
    </View>
  )
}