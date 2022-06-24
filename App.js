import { View,StyleSheet } from 'react-native'
import React from 'react'
import AuthNavigation from './screen/AuthNavigation'

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  }
})

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <AuthNavigation/>
    </View>
  )
}


export default App


