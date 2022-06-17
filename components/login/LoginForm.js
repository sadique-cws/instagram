import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [isValid, setIsValid]  = useState(true)
  return (
    <View style={styles.FormContainer}>
        <View style={styles.formInput}>
            <TextInput 
            style={{paddingHorizontal:10}}
            placeholderTextColor="#202020" 
            placeholder='Phone Number, Email or Username'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            />

        </View>
        <View style={styles.formInput}>
            <TextInput
            style={{paddingHorizontal:10}}
            secureTextEntry={true}
            placeholderTextColor="#202020" 
            placeholder='Password' />
        </View>
            <Pressable onPress={() => console.log("login wale ")} disabled={!isValid} titleSize={20} style={styles.button(isValid)} >
                <Text style={styles.loginButtonText}>Log In</Text>
            </Pressable> 

        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:10}}>
        <Text style={{color:"grey",fontWeight:"600"}}>Forget your login details? </Text>
        <Text style={{color:"#a6a6a6"}}>Get Help Logging in</Text>
        </View>
            
    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    FormContainer:{
        padding:10,
    },  
    formInput:{
        width:"100%",
        height:50,
        borderRadius:2,
        borderWidth:1,
        borderColor:"#d4d4d4",
        borderStyle:"solid",
        marginTop:10,
    },
    button: (isValid) =>  ({
        backgroundColor: isValid ? "#0095f6" : "#0095f64d",
        justifyContent:"center",
        alignItems:"center",
        minHeight:40,
        marginTop:10,
        borderRadius:5
    }),
    loginButtonText:{
        flexDirection:"row",
        fontWeight:"700",
        color:"#fff",
        fontSize:16,
    }
    
})