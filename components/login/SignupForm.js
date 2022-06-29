import { Button, Pressable, StyleSheet, Text,Alert, TextInput, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore";
const SignupForm = ({navigation}) => {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required("an email is required"),
        name:Yup.string().required("Name is Required"),
        password:Yup.string().required().min(6, "your password must be >= 6 length")
    })

    const onSignup = async (email,password,name) => {
        try{
            const authUser = await auth()
            .createUserWithEmailAndPassword(email, password);
            console.log("WOw.. Account created successfully")
            // more details storing

            await firestore().collection("users").add({
                owner_uid: authUser.user.uid,
                fullname: name,
                profile_picture: "https://picsum.photos/30/30?random=3"
            })
            navigation.push("login")
        }
        catch(error){
            Alert.alert('Something went Wrong',error.message);
        }
        
    }

  return (
    <View style={styles.FormContainer}>
        <Formik initialValues={{
            email:"",
            password:"",
            name:"",
        }} onSubmit={(values) => onSignup(values.email,values.password,values.name)}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
        >
            {
                ({handleChange,handleBlur,values,handleSubmit, isValid}) => (
       <>
        <View style={styles.formInput}>
            <TextInput 
            style={{paddingHorizontal:10}}
            placeholderTextColor="#202020" 
            placeholder='Full Name'
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            />

        </View>
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
            

        
        </>
         )}
        </Formik> 

        <View style={{
        position:"absolute",
        bottom:-190,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"

        }} >
       <TouchableOpacity onPress={() => navigation.push('login')} >
                <Text style={{color:"#a6a6a6"}}>Already have an Account? Login Here</Text>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default SignupForm

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