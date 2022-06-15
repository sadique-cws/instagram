import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from './screen/HomeScreen'
import NewPostScreen from './screen/NewPostScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <NewPostScreen/>
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