import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const ScrollViews = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {[...Array(20)].map((_, i) => (
        <View key={i} style={{ height: 100, margin: 10, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default ScrollViews;
