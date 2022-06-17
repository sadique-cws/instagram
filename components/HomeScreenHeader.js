import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const image = require("../a/logo.png")
const HomeScreenHeader = ({navigation}) => {
  return (
    <SafeAreaView style={styles.header}>
        <Image source={image} style={styles.logo}/>


      <View style={styles.iconsWrapper}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.push("newPost")}>
                <Image style={styles.iconImage} source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhUlEQVRIie2U0Q2AIAxEr8Y1dB4mYXAY5PwRYxowUhLB6PuEcr1rE4CfGkg6kpF2Akl31hTVIABYGn1GEVlLCUiSVuXc+8kqdpeqBpaEYyUYssF8dVmatz4XEcnVAb0TaGfJ+ZVjzfuX3HcHmprZJx5PEAEsLT/qrnGgE3hdYBD3De+/yAbUF3eW9krN8gAAAABJRU5ErkJggg=="}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
                <Image style={styles.iconImage} source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABsUlEQVRIidWVv0pcQRyFz91ddv1TxwT1AVbTBHwFcS1SJStYiI1ggk1MhGC5r+ELCMqyKG7abCoTsAhpFbRQF4SERJtY5UuRIw5m9u69VskPbjFzzvlm5t65M9L/XkmaCAxJqkt6KumJpFFLXUmfJbUlNZMk+ZlrVCABXgBd+lcXWM4DHwK2A8BH4CVQBYb9VN33KfBtAYP94EVgx4HvwPMME5qzF6AFFNLM6zZ+Bao5Vj3hDMDbXqaHwJVN01nhQX7G2UtgJGZ4Y8NuXnjA2DNjNSZ+sPisR7gBbADloK/ob1Bzu25GJwY4tzjWA35T+95Fr4EToBH4xu05jQ1wbbGSAr9bjTveivuvM63A8BPPturZR+FZVtCxWHe75vdbDDxlf4e/4NbnzHgfE1ctvouFsxTQNuNVTHwA/LChdg/4rLPx/8CmNZu+AZM54I+dAVhLMxa4PeguMoATYD5YeZO0s8ihgWCnlIAFYMm7aJA/p+kksAIcBN5N+p2mwSA3dUj/OgOWerGiNxpA0DyS9EXSlKRHkn5JOtPtjda6z40GcAwsA6Vc4YwDLBL8YP90/Qb7H8/jPaKMNgAAAABJRU5ErkJggg=="}}/>
          </TouchableOpacity>
          
      </View>
    </SafeAreaView>
  )
}

export default HomeScreenHeader

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:65,
        padding:5,
        display:"flex",
        flexDirection:"row",
       justifyContent:"space-between",
    },
    logo:{
       width:110,
       resizeMode:"contain"
    },
    icon:{
        color:"white",
    },
    iconsWrapper:{
        display:"flex",
        flexDirection:"row",
        marginTop:5,
    },
    iconImage:{
      width:30,
      height:30,
      marginHorizontal:2,
    }
})