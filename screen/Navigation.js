import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import Login from './LoginScreen'
import SignupScreen from './signUpScreen'

const Stack = createStackNavigator()



const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name="home" options={{
                headerShown:false,
            }} component={HomeScreen}/>
            <Stack.Screen name="newPost" options={{
                headerShown:false,
            }} component={NewPostScreen}/>
            <Stack.Screen name="login" options={{
                headerShown:false,
            }} component={Login}/>
            <Stack.Screen name="signup" options={{
                headerShown:false,
            }} component={SignupScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

