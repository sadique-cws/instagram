import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../components/login/LoginForm'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.logo}>
                <Image style={styles.logoImage} source={{uri:"https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"}}/>
        </View>
        <LoginForm navigation={navigation}/>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
            flex:1,
            justifyContent:'center',
            
    },  
    logo:{
        width:"100%",
        paddingHorizontal:60,
        height:80,
    },
    logoImage:{
        flex:1,
        height:200,
    }
})