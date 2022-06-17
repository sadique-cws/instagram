import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader'
import Stories from '../components/Stories'
import POST from '../data/post'
import Post from '../components/Post'
import BottomIcons from '../components/BottomIcons'
import Bicons from '../data/Bicons'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomeScreenHeader navigation={navigation} />
      <ScrollView>
      <Stories />
        {
          POST.map((value, index) => {
            return <Post key={index} post={value} />
          })
        }
      </ScrollView>
      <BottomIcons Bicons={Bicons}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
  }
})