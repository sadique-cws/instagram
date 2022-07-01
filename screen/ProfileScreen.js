import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import ProfileScreenHeader from '../components/profileScreen/ProfileScreenHeader'
import ProfileScreenAbout from '../components/profileScreen/ProfileScreenAbout'
const ProfileScreen = ({navigation}) => {
    
const onSignout = () => {
    try{
        auth().signOut()
        console.log("signout successfully")
        // navigation.push("login")
      }
    catch(error){
      console.log("error by me")
    }
  } 

  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <ProfileScreenHeader/>
      <ProfileScreenAbout/>
      <TouchableOpacity onPress={() => onSignout()}> 
    <Text>hello logout </Text> 
    </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})