import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './screen/HomeScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HomeScreen/>
    </SafeAreaView>
  )
}


export default App


const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:"black",
    flex:1,
  }
})