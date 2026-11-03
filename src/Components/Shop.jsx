import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import dataItems from "../data.js"
import Users from './Users.jsx'
import ProductCarts from './ProductCarts.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, AddQuantity, deleteProduct } from '../redux/slice/productSlice.js';

const Shop = () => {
  const isLoggedIn = useSelector(state => state.users.isLoggedIn)
  const productCart = useSelector(state => state.product.elements)
  const dispatch = useDispatch()
  console.log(productCart)

  return (
    <ScrollView style={{ marginVertical: 10, backgroundColor: '#F5F5F5', }}>
     <Users />
     {isLoggedIn && <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}> Available Products </Text>
      <View style={{ backgroundColor: '#FFFFFF', padding: 15, borderRadius: 12,  marginBottom: 15, flexDirection: 'column', alignItems: 'center', gap: 20}}> 
      {dataItems.map((item, index) => (        
        <View style={{width: '80%', height: 270, backgroundColor: '#F6F2DD', borderRadius: 10}} key={index}>
            <Image source={item.img} style={{ width: '100%', height: 200}}/>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#9C5A78', }}>{item.name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', }}>Rs. {item.price}</Text>
              <TouchableOpacity
              onPress={() =>{
                if(productCart.some(data => data?.id === item?.id))
                  {
                     dispatch(AddQuantity({id :item?.id}))
                  }
                  else{
                   dispatch(addProduct(item))
                  }
                }}
              style={{backgroundColor: '#EEC8C1', paddingVertical: 2, paddingHorizontal: 4, borderRadius: 6}}><Text>Add To Cart</Text></TouchableOpacity>
            </View>
        </View>
        ))}
      </View>  
      <ProductCarts /> 
      </View>}
    </ScrollView>
  );
};

export default Shop;