import { View, Text, Image } from "react-native";

const UIDesign  = () => {
    return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '90%', height: '96%', borderRadius: 10, backgroundColor: 'gray', marginVeertical: 10}}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 6 }}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Image source={require('./Image/menu-img.png')} style={{width: 60, height: 40, resizeMode: 'center'}} />
                    <Text style={{fontSize: 16, fontWeight: "bold"}}>Product</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, borderColor: 'black', borderWidth: 2, borderRadius: 50, paddingHorizontal: 16, paddingVertical: 6, backgroundColor: 'lightblue'}}>
                    <Text>1 Items</Text>
                    <Image source={require('./Image/menu-img.png')} style={{width: 40, height: 30, resizeMode: 'center', }} />
                </View>
            </View>
            <View style={{backgroundColor: 'white', paddingVertical: 4, marginHorizontal: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderRadius: 10, }}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                    <Image source={require("./Image/left-arrow.png")} style={{width: 40, height: 20}} />
                    <View style={{flexDirection: 'column', justifyContent: 'space-between', gap: 2}}>
                        <Text style={{fontSize: 20, fontWeight: "bold", color: '#36454F'}}>Cosmetics</Text>
                        <Text style={{fontSize: 16, color: '#595f61'}}>50 Shop Availaible</Text>
                    </View>
                </View>
                <Image source={require('./Image/filter-img.jpg')} style={{width: 40, height: 30}} />
            </View>
        </View>
      </View>
    </View>
    )
}

export default UIDesign;