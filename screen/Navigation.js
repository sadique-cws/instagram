import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import Login from './LoginScreen'
import SignupScreen from './signUpScreen'
import ProfileScreen from './ProfileScreen'
import CommentScreen from './CommentScreen'

const Stack = createStackNavigator()



const WithAuthNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name="home" options={{
                headerShown:false,
            }} component={HomeScreen}/>

            <Stack.Screen name="newPost" options={{
                headerShown:false,
            }} component={NewPostScreen}/>

            <Stack.Screen name="profile" options={{
                headerShown:false,
            }} component={ProfileScreen}/>

            <Stack.Screen name="comments" options={{
                headerShown:false,
            }} component={CommentScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}



const WithoutAuthNavigation = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='login'>
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

export {
    WithAuthNavigation,
    WithoutAuthNavigation,
}
