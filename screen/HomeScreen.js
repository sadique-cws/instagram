import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect,useState } from 'react'
import HomeScreenHeader from '../components/HomeScreenHeader'
import Stories from '../components/Stories'
import POST from '../data/post'
import Post from '../components/Post'
import BottomIcons from '../components/BottomIcons'
import Bicons from '../data/Bicons'
import firestore from '@react-native-firebase/firestore'
const HomeScreen = ({navigation}) => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    firestore().collectionGroup("posts").onSnapshot(snapshot => {
      setPost(snapshot.docs.map(document => document.data()))
    })
  },[]) 
  
  return (
    <View style={styles.container}>
      <HomeScreenHeader navigation={navigation} />
      <ScrollView>
      <Stories />
        {
          posts.map((value, index) => {
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