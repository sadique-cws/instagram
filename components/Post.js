import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from '../data/Icons';
import {useState} from 'react';
const Post = ({post}) => {
  return (
    <View style={styles.post}>
        <PostHeader post={post}/>
        <PostBody post={post}/>
        <PostFooter post={post}/>
    </View>
  )
}

const PostFooter = ({post}) => {
    const [isLike, setIsLike] = useState(false);
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
            <View style={{flexDirection:"row"}}>
                <Icon IconStyle={styles.postFooterIcon} imgUrl={(isLike)?Icons[0].LikedIconURL:Icons[0].IconURL} onPress={() => setIsLike(!isLike)}/>
                <Icon IconStyle={[styles.postFooterIcon,styles.CommentIconStyle]} imgUrl={Icons[1].IconURL}/>
                <Icon IconStyle={styles.postFooterIcon} imgUrl={Icons[2].IconURL}/>
            </View>
            <View>
            <Icon IconStyle={styles.postFooterIcon} imgUrl={Icons[3].IconURL}/>
            </View>
        </View>   
    )
}

const Icon = ({IconStyle,imgUrl,onPress}) => (
        <TouchableOpacity onPress={() => onPress()}>
            <Image source={{uri:imgUrl}} style={IconStyle}/>
        </TouchableOpacity>
)

const PostBody = ({post}) => {
    return (
        <View>
            <Image style={{width:"100%",height:350}} source={{uri:"https://via.placeholder.com/150"}}/>
        </View>
    )
}

const PostHeader = ({post}) => {
    return (
        <View style={styles.PostHeaderContainer}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Image source={post.user.imgUrl} style={styles.postProfileImage}/>
                <Text style={{color:"white"}}>{post.user.name}</Text>
            </View>
            <TouchableOpacity>
                    <Image  style={styles.postActions} source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAS0lEQVRIie3SwQnAIAxAUel0le6/gHaP50Xo0VIUD827hyTwUwqz4MKNirxiQfUob+eO6Zd8hdy/KDh33/NHkelQZLpfZDoUmS7TAMKohPdLbejeAAAAAElFTkSuQmCC"}}/>
            </TouchableOpacity>
        </View>
    )
}
export default Post

const styles = StyleSheet.create({
    PostHeaderText:{
        color:"white",
    },
    PostHeaderContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderTopWidth:1,
        borderTopColor:"#1e1e1f",
        paddingVertical:7,
        marginTop:12,
        borderTopStyle:"solid"
    },
    postProfileImage:{
        width:35,
        height:35, 
        borderRadius:20,
        marginHorizontal:5
    },
    postActions:{
        width:20,
        height:20,
        marginTop:7,
    },  
    post:{
        width:"100%",
    },
    postFooterIcon:{
        width:30,
        height:30,
        marginHorizontal:8,
        marginVertical:3,
    },
    CommentIconStyle:{
        transform:[{rotateY:"3.142rad"}]
    }
})