import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import DropDown from './DropDown.jsx'
import Transaction from './Transaction.jsx'
import { useSelector } from 'react-redux'

const ExpenseTracker = () => {
    const EXPENSE_CATEGORIES = ['Food', 'Shopping', 'Entertainment', 'Other expense'];
    const INCOME_SOURCES = ['Salary', 'Freelance money', 'Business', 'Other source'];
    const trasactionAmount = useSelector(state => state.transaction.detail)


  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50}} 
    style={{paddingHorizontal: 20, paddingVertical: 16, flex: 1,  }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#1D3ECF'}}>EXPENSE TRACKER</Text>
        <View style={{ }}>
            <Text>Welcome back</Text>
            <Text style={{paddingHorizontal: 30}}>Muhammad</Text>
        </View>
        <View style={{width: '100%', height: 160,  backgroundColor: '#203F9C', marginTop: 10, paddingVertical: 20, borderRadius: 10}}>
            <View style={{justifyContent: 'center', alignItems: 'center', gap: 6}} >
                   <Text style={{color: '#FFFAF1'}}>TOTAL BALANCE</Text>
                   <Text style={{color: '#FFFAF1'}}>${trasactionAmount.filter(item => item.type == 'income').reduce((acc, curVal) => acc + curVal.income, 0) - trasactionAmount.filter(item => item.type == 'expense').reduce((acc, curVal) => acc + curVal.cost, 0)   }</Text>   
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal:20}}>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.45)', padding: 20, paddingHorizontal: 36, borderRadius: 10, gap: 4, }}>
                    <Text>INCOME</Text>
                    <Text>$ {trasactionAmount.filter(item => item.type == 'income').reduce((acc, curVal) => acc + curVal.income, 0)}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.40)', paddingVertical: 20, paddingHorizontal: 36, borderRadius: 10, gap: 4 ,   }}>
                    <Text>EXPENSE</Text>
                    <Text>$ {trasactionAmount.filter(item => item.type == 'expense').reduce((acc, curVal) => acc + curVal.cost, 0)}</Text>
                </View>
            </View>
        </View>
        
        <DropDown options={INCOME_SOURCES} type="income"/>
        <DropDown  options={EXPENSE_CATEGORIES} type="expense" />
        <View>
            <Transaction />
        </View>
    </ScrollView>

  )
}

export default ExpenseTracker