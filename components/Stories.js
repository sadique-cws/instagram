import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'
import peoples from '../data/peoples'
import LinearGradient from 'react-native-linear-gradient'

const Stories = () => {
  return (
    <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
        {
            peoples.map((value,index) => (
                <View  key={index} style={styles.peopleContainer}>
               <View style={styles.peoples}>
                    <Image source={value.imgUrl} style={styles.peoplesImage}/>
                </View> 
                <Text style={styles.storyText}>{(value.name.length >= 9)? value.name.slice(0,9)+"...": value.name}</Text>
                </View>
                
            ))
        }
    </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    storyContainer:{
        display:"flex",
        flexDirection:"row",
        
    },
    peopleContainer:{
        flexDirection:"column",
    },
    peoples:{
        marginHorizontal:4,
        padding:1,
        borderRadius:50,
        borderWidth:3,
        borderColor:"red",
        
    },
    peoplesImage:{
        width:80,
        borderRadius:50,
        height:80,
        resizeMode:"contain",
        
    },
    storyText:{
        color:"white",
        marginTop:3,
        textAlign:"center"
    }
    
})