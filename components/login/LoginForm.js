import { Button, Pressable, StyleSheet, Text, TextInput, View,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';


const LoginForm = ({navigation}) => {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required("an email is required"),
        password:Yup.string().required().min(6, "your password must be >= 6 length")
    })

    const onLogin = (email,password) => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
             Alert.alert('Something went Wrong',`${error}`,[
                {text:"ok",onPress:console.log("ok")},
                {text:"Signup",onPress:navigation.push("signup")},
             ]);
        });
    }

  return (
    <View style={styles.FormContainer}>
        <Formik initialValues={{
            email:"",
            password:"",
        }} onSubmit={(values) => onLogin(values.email,values.password)}
           validationSchema={LoginFormSchema}
           validateOnMount={true}>
            {
                ({handleChange,handleBlur,values,handleSubmit, isValid}) => (
       <>
        <View style={styles.formInput}>
            <TextInput 
            style={{paddingHorizontal:10}}
            placeholderTextColor="#202020" 
            placeholder='Phone Number, Email or Username'
            autoCapitalize='none'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType='email-address'
            textContentType='emailAddress'
            />

        </View>
        <View style={styles.formInput}>
            <TextInput
            style={{paddingHorizontal:10}}
            secureTextEntry={true}
            placeholderTextColor="#202020" 
            placeholder='Password'
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password} />
        </View>
            <Pressable onPress={handleSubmit} disabled={!isValid} titleSize={20} style={styles.button(isValid)} >
                <Text style={styles.loginButtonText}>Log In</Text>
            </Pressable> 
            

        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:10}}>
        <Text style={{color:"grey",fontWeight:"600"}}>Forget your login details? </Text>
        <Text style={{color:"#a6a6a6"}}>Get Help Logging in</Text>

 
       
        </View>
      
        </>
         )}
        </Formik> 
        <View style={{
        position:"absolute",
        bottom:-200,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"

        }} >
       <TouchableOpacity onPress={() => navigation.push('signup')} >
                <Text style={{color:"#a6a6a6"}}>Not have an Account? SignUp</Text>
        </TouchableOpacity>
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