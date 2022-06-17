import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './screen/HomeScreen'
import NewPostScreen from './screen/NewPostScreen'
import Navigation from './screen/Navigation'

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  }
})

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Navigation/>
    </View>
  )
}


export default App


