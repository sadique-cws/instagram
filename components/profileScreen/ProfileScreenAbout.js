import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreenAbout = () => {
  return (
   <View>
     <View style={{height:100,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <View>
          <Image style={{width:80,height:80,borderRadius:40}} source={{uri:"https://picsum.photos/100/100?random=33"}}/>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-around",gap:20,flex:1}}>
            <View>
                <Text style={{textAlign:"center",fontSize:16,color:"white"}}>52</Text>
                <Text style={{fontSize:12,color:"white"}}>Posts</Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontSize:16,color:"white"}}>303</Text>
                <Text style={{fontSize:12,color:"white"}}>Followers</Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontSize:16,color:"white"}}>612</Text>
                <Text style={{fontSize:12,color:"white"}}>Following</Text>
            </View>
        </View>
    </View>
    <View style={{width:"100%"}}>
      <Text style={{fontWeight:"bold",color:"white",fontSize:16}}>Sadique Hussain</Text>
      <Text style={{fontWeight:"300",color:"white",fontSize:14,marginTop:5}}>Wish me 7 July and work on Coding, Algorithm, Structure etc</Text>

      <TouchableOpacity style={{borderColor:"#ddd",borderWidth:1,width:"100%",paddingHorizontal:5,paddingVertical:10,marginTop:10,borderRadius:5}}>
          <Text style={{color:"white",textAlign:"center"}}>Edit Profile Details</Text>
      </TouchableOpacity>
    </View>
    
   </View>
  )
}

export default ProfileScreenAbout

const styles = StyleSheet.create({})