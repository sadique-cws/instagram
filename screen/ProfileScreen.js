import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProfileHeader from '../components/profile/profileHeader'
import auth from '@react-native-firebase/auth'
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
    <TouchableOpacity onPress={() => onSignout()}> 
    <Text>hello logout </Text> 
    </TouchableOpacity>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})