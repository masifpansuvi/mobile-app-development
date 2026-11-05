import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
// import { addTransaction, clearTransaction } from '../redux/slice/expenseSlice'
import { addTransaction, clearTransaction } from '../redux/slice/transactionSlice'
// import { addEarnings, clearEarning } from '../redux/slice/earningsSlice'

const DropDown = ({ options, type}) => { 

    const [ select, setSelect ] = useState('')
    const [ showOption, setShowOption ] = useState(false)
    const [ earnings, setEarnings ] = useState(0)
    const dispatch = useDispatch()
    const addDetail = () => {
        // dispatch(clearTransaction())
        if (type == 'expense'){
            dispatch(addTransaction({
                id: Date.now(),
                type: type,
                category: select,
                cost: Number(earnings)
            }))
            setSelect('')
            setEarnings(0)
        } else {
            dispatch(addTransaction({
                id: Date.now(),
                type: type,
                income: Number(earnings),
                income_source: select
            }))
            setSelect('')
            setEarnings(0)
        }
    }
    // useEffect(() => {
    //     dispatch(clearTransaction())
    // })

  return (
    <View style={{ marginTop: 20, flexDirection: 'row', gap: 10, alignItems: 'center', position: 'relative' }}>
      <View style={{width: '50%', }}>
        <TextInput
        value={select}
        onChangeText={setSelect}
        onFocus={() => setShowOption(true)}
        placeholder={type == 'expense'? 'Choice your Expense Category' : 'Choice your Income Source'}
        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 6 }}
        />
        { showOption && (
            <View style={{ position: 'absolute', top: 55, left: 0, right: 0, zIndex: 999, elevation: 5, backgroundColor: 'white', }}>
                {options.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                        setSelect(item)
                        setShowOption(false)
                    }}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )}
      </View>
      <TextInput 
      value={earnings}
      onChangeText={setEarnings}
      placeholder={type == 'expense'? 'Enter your Expense' : 'Enter your Income'}
      style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 6, width: '35%' }}
      />
      <TouchableOpacity
      onPress={addDetail} 
      style={{ backgroundColor: 'red', width:'10%', borderWidth: 1, borderColor: 'gray', borderRadius: 6, paddingVertical: 10 }}><Text style={{textAlign: 'center'}}>Add</Text></TouchableOpacity>
    </View>
  )
}

export default DropDown;