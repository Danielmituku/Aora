import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { slot } from 'expo-router';

const RootLayout = () => {
  return (
    <View style={styles.contianer}>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  contianer:{
    display:"flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  }
})