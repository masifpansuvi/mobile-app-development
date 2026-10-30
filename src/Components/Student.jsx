import { View, Text, TextInput, Button, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../redux/slice/todosSlice'

const Student = () => {
    const data = useSelector(state => state.student.list)
    const dispatch = useDispatch()
    const [name, setName ] = useState('')
    const [fname, setFName ] = useState('')
    const [age, setAge] = useState(0)
    const [percentage, setPercentage ] = useState('')
    const [stdData, setStdData ] = useState([])
    console.log('data==========>',data)
    
    const addStudent = () => {
         dispatch(addData({
                name: name,
                fname: fname,
                age: age,
                percentage: percentage,
            }))
            setName('')
            setFName('')
            setAge('')
            setPercentage('')
    }
    // const percentages = (text) => {
    //     setPercentage(text)
    //     console.log(percentage)
    //     if (Number(percentage) > 75){
    //         setResult(true)
    //     } else {
    //         setResult(false)
    //     }
    //     console.log(result)
    // }

  return (
    <View style={{flex: 1, padding: 20, paddingTop: 60}}>
      <Text>Enter Your Name</Text>
      <TextInput 
        placeholder='Enter Your Name'
        value={name}
        onChangeText={setName}
        style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
        />
        <Text>Enter Your Father Name</Text>
      <TextInput 
        placeholder='Enter Father Name'
        value={fname}
        onChangeText={setFName}
        style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
        />
        <Text>Enter Your Age</Text>
      <TextInput 
        placeholder='Enter Your Age'
        value={age}
        onChangeText={setAge}
        style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
        />
        <Text>Enter Your Percentage</Text>
      <TextInput
        placeholder='Enter Your Percentage'
        value={percentage}
        onChangeText={setPercentage}
        style={{ borderRadius: 4, borderColor: 'transparent', backgroundColor: '#bbbbbb', padding: 10, marginBottom: 10}}
        />
        <Button title="Add Students" onPress={() => addStudent()} style/>
        
        <View>
            <ScrollView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Name</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Father Name</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Age</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Percentage</Text>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>Remarks</Text>
                </View>
                { data.map((std, index) => (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{std.name}</Text>
                        <Text>{std.fname}</Text>
                        <Text>{std.age}</Text>
                        <Text>{std.percentage}%</Text>
                        <Text>{Number(std.percentage) > 75 ? "Pass": "Fail"}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
  )
}

export default Student;