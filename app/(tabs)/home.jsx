import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, SafeAreaView } from 'react-native-web'

const Home = () => {
  return (
    <SafeAreaView>
        <FlatList 
          data={[]}
          keyExtractor ={ item => item.$id}
          renderItem = {({item})=>{
            <Text className>{item.id}</Text>
          }}
        
        />
    </SafeAreaView>
  )
}

export default Home