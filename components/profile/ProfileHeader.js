import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProfileHeader = ({onSignout}) => {
  return (
    <View style={{backgroundColor:"black"}}>
      

        <TouchableOpacity onPress={onSignout}>
                <Text>Logout hello working</Text>
        </TouchableOpacity>


    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({})