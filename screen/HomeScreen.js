import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader'
import Stories from '../components/Stories'
import POST from '../data/post'
import Post from '../components/Post'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreenHeader />
      <ScrollView>
      <Stories />
        {
          POST.map((value, index) => {
            console.log(value)
            return <Post key={index} post={value} />

          })
        }
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})