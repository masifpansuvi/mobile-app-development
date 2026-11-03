import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import dataItems from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { AddQuantity, deductQuantity } from '../redux/slice/productSlice'

const ProductCarts = () => {
    const dispatch = useDispatch()
    const productItems = useSelector(state => state.product.elements)
    console.log(productItems)
    
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 30,fontWeight: 'bold'}}>My Cart</Text>
        {productItems.map((items, index) => (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10, backgroundColor: '#F3E1F6', marginVertical: 20, marginHorizontal: 20,borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10}} key={index} >
                <View style={{}}>
                    <Image source={items.img} style={{height: 80, width: 100, borderRadius: 10 }} />
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{items.name}</Text>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center', gap: 10}}>
                    <Text style={{fontSize: 16,fontWeight: 'bold'}}>${items.price * items.qty}</Text>
                    <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                        <TouchableOpacity onPress={()=>{
                            dispatch(deductQuantity({id : items.id}))
                        }} style={{borderWidth: 1, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 10}}><Text style={{fontSize: 16,fontWeight: 'bold'}}>-</Text></TouchableOpacity>
                        <Text style={{fontSize: 16,fontWeight: 'bold'}}>{items?.qty}</Text>
                        <TouchableOpacity 
                         onPress={()=>{
                            dispatch(AddQuantity({id : items.id}))
                        }}
                        style={{borderWidth: 1, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 10}}><Text style={{fontSize: 16,fontWeight: 'bold'}}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        ))}
        <View style={{marginHorizontal: 30, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#E190EE', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} >TOTAL PRICE</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}} >${productItems.reduce((total, item) => total + item.price * item.qty, 0)}</Text>
        </View>
    </View>
  )
}

export default ProductCarts