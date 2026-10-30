import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



const Carts = ({ price,background_color, mainHeading, paraText, img, textColor, addCart, deleteCartItem }) => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const reduceItem = () => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  };
  const increaseItem = () => {
    setCount(count => count + 1);
    price = price * count
  };

  useEffect(() => {
    setTotal(price * count);
  }, [count]);

  return (
    <View
      style={{
        marginVertical: 40,
        height: '40%',
        borderRadius: 10,
        backgroundColor: background_color,
        marginHorizontal: 30,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: '6%',
          backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignContent: 'center',
          flexDirection: 'column',
          paddingHorizontal: 20,
          gap: 4,
        }}
      >
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              textAlign: 'center',
              color:  {textColor},
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            { mainHeading }
          </Text>
          <Text style={{ textAlign: 'center', color: textColor, fontSize: 16 }}>
            {paraText}
          </Text>
        </View>
        <Image
          style={{
            width: '100%',
            height: '30%',
            borderRadius: 10,
            borderColor: '#DBD9D9',
            borderWidth: 2,
          }}
          source={img}
        />
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          alignItems: 'center'
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${price}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Rating</Text>
        </View>
        <View
          style={{ justifyContent: 'flex-end', flexDirection: 'row', gap: 10 }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#9b9cac',
              paddingHorizontal: 10,
            }}
            onPress={reduceItem}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> - </Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {count} </Text>
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: '#9b9cac',
              paddingHorizontal: 10,
            }}
            onPress={increaseItem}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Size</Text>
          <View style={{ flexDirection: 'row', gap: 36 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>L</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>XL</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: 20, paddingVertical: 4, fontWeight: 'bold' }}
          >
            COLORS
          </Text>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 16,
                    width: 20,
                    backgroundColor: 'red',
                    borderRadius: '50%',
                  }}
                ></View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 16,
                    width: 20,
                    backgroundColor: 'yellow',
                    borderRadius: '50%',
                  }}
                ></View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 16,
                    width: 20,
                    backgroundColor: 'black',
                    borderRadius: '50%',
                  }}
                ></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-between',  }}>
        <TouchableOpacity
        disabled={count == 0}
        style={{
          paddingHorizontal: 6,
          paddingVertical: 10,
          backgroundColor: 'yellow',
          borderWidth: 2,
          borderColor:'transparent',
          borderRadius: 8
        }}
        onPress={addCart}
      >
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
          ADD TO CART
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={count == 0}
        style={{ paddingHorizontal: 6, paddingVertical: 10, backgroundColor: 'gray',
          borderWidth: 2,
          borderColor:'transparent',
          borderRadius: 8,
        }}
        onPress={deleteCartItem}
      >
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
          DELETE ITEM
        </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Carts;
