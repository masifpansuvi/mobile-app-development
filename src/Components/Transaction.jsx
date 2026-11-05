import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Transaction = () => {
    const tranactionAmount = useSelector(state => state.transaction.detail)
    console.log("Transaction =====> ", tranactionAmount)
  return (
    <ScrollView >
        <View style={{flexDirection: 'column', gap: 24, width: '100%', paddingTop: 20}}>
            {tranactionAmount.map((item, index) => (
                <View key={index} style={{height: 60, }}>
                    {(item.type === 'expense') && (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#9C1C0E', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 6}}>
                        <View style={{flexDirection: 'column', gap: 8, }}>
                            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Expense category</Text>
                            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>{item.category}</Text>    
                        </View>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>${item.cost}</Text>
                    </View>
                    )}
                    {(item.type === "income") && (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#453D8F', borderRadius: 6, paddingHorizontal: 10,}}>
                        <View style={{flexDirection: 'column', gap: 8, paddingHorizontal: 10, paddingVertical: 6}}>
                            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Income Source</Text>
                            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>{item.income_source}</Text>    
                        </View>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>${item.income}</Text>
                    </View>
                    )}
                </View>
            ))}
        </View>
    </ScrollView>
  )
}

export default Transaction