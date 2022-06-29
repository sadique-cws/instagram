import { StyleSheet, Text, View,Image,TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import Icons from '../data/Icons';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from "@react-native-firebase/app"

const Post = ({post,navigation}) => {
   
  return (
    <View style={styles.post}>
        <PostHeader post={post}/>
        <PostBody post={post}/>
        <PostFooter post={post} navigation={navigation}/>
    </View>
  )
}

const PostFooter = ({post,navigation}) => {

    const currentLikeStatus = !post.likes_by_users.includes(
        auth().currentUser.email
    )

    const handleLike = post =>{
        firestore()
        .collection('users')
        .doc(post.owner_email)
        .collection("post")
        .doc(post.id)
        .update({
            likes_by_users: currentLikeStatus ? 
            firestore.FieldValue.arrayUnion(
                auth().currentUser.email)
                : 
                firestore.FieldValue.arrayRemove(
                    auth().currentUser.email)   
        }).catch(error => {
            console.log(error)
        })

        
    }


    return (
        <View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
            <View style={{flexDirection:"row"}}>
                <Icon IconStyle={styles.postFooterIcon} imgUrl={(!currentLikeStatus)?Icons[0].LikedIconURL:Icons[0].IconURL} onPress={() => handleLike(post)}/>
                <Icon IconStyle={[styles.postFooterIcon,styles.CommentIconStyle]} onPress={() => navigation.navigate("comments",{postData:post})} imgUrl={Icons[1].IconURL}/>
                <Icon IconStyle={styles.postFooterIcon} imgUrl={Icons[2].IconURL}/>
            </View>
            <View>
            <Icon IconStyle={styles.postFooterIcon} imgUrl={Icons[3].IconURL}/>
            </View>
        </View>   
        <View>
            <PostLike post={post}/>
            <PostCaption post={post}/>
            {(!!post.comments.length) && <PostComment post={post}/>}

        </View>
        </View>
    )
}

export const Icon = ({IconStyle,imgUrl,onPress}) => (
        <TouchableOpacity onPress={() => onPress()}>
            <Image source={{uri:imgUrl}} style={IconStyle}/>
        </TouchableOpacity>
)

const PostBody = ({post}) => {
    return (
        <View>
            <Image style={{width:"100%",height:350}} source={{uri:post.imageURl}}/>
        </View>
    )
}

const PostLike = ({post}) => {
    return (
        <View>
            <Text style={{fontWeight:"bold",color:"white"}}>{post.likes_by_users.length} {(post.likes_by_users.length < 2)? "Like" : "Likes"}</Text>
        </View>
    )
}

const PostComment = ({post}) => {
    return (
        <>
        <View>
            <Text style={{fontWeight:"bold",color:"grey",marginTop:4}}>
            View 
            {(post.comments.length < 2)? " ":" all "} 
            {post.comments.length}{' '}
            {(post.comments.length > 1)? "Comments":"Comment"}</Text>
        </View>
        </>
    )
}
 

const PostCaption = ({post}) => {
    const [isMore, setIsMore ]  = useState(false)
    return (
        <View style={{marginVertical:4,flexDirection:"row"}}>
            <Text style={{color:"white"}}>
            <Text style={{fontWeight:"bold"}}>{post.user.name}{' '}</Text>
            {post.caption.slice(0,20)}
            {(isMore) && post.caption}
            {(!isMore) && (post.caption.length > 20) && <TouchableOpacity onPress={() => setIsMore(true)}>
                    <Text style={{color:"white"}}>More</Text>
                </TouchableOpacity>}
            </Text>
        </View>
    )
}
const PostHeader = ({post}) => {

    return (
        <View style={styles.PostHeaderContainer}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <Image source={{uri:post.profile_picture}} style={styles.postProfileImage}/>
                <Text style={{color:"white"}}>{post.user}</Text>
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
        marginBottom:55,
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