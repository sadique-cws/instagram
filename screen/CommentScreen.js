import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView, TextInput } from 'react-native'
import React,{useEffect,useState} from 'react'
import { Icon } from '../components/Post'
import Icons from '../data/Icons'
import { BACK_ICON } from './NewPostScreen'
import * as Yup from 'yup'
import { Formik } from 'formik'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import firebase from "@react-native-firebase/app"
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const HEART_ICON  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD6UlEQVRoge2ZS2xUZRTHz9dpkzY824SAPGQBZlLA2AcaQaML07DhZYRoN4QFwUAw7MqSmmriVoMPCJKgTdzwaOKCpyZujGIIBEMxLIDSamKkLVCg1bT9ubjncz7Tdu43d+58w2L+yeRkvnvO//zP/R5z7xmRCiqooIIKygDj6whkRWSriLSJyBIRWSYi1SIyJCLXReQHETlhjPnNk69RRLaJyGsislpEGkRkXET6RWRARC6ISI8x5qavxriEa4Hv8MMkcBZoysPXrD6TnpwXgdZiCqgBDjkJB4GjwGYgC8wCaoFlwCbgc2BIfceB94GMw5cBPtBrlu8zYKNy1CpnFtgCfKk+9gZ9AlQXWkQ98L2SPAa6gLkecXOATmBMY7/SAjJAt46NAQeBOR58c7X4J87szPctosYp4i7Q7BX4f44moE85up0i7gAvJOBrBfqdYuJnRpeTLWJxoUkdnuXKYdEHPFsE32KnmI/jnNfqenycZCam4WvVpTQGtKTA16LLbCIvH7nTqavYpA5nB9CRIt+HqvHCTA5ZdRj02dgFJM7gnF4p8M0jdzo+Z8erHJ831Z42xjxMK7ExZsIYM5Ei3wMR6dGvW+24W8gbar9NK2kJYTW22QG3kOVqrweTkxy9aqeegsCIrrvZYTUVDmC2ah2xY+6M2A05HlZWIkyq/U+/W8iw2oZgcpLDahyyA24h99Q+E0xOcliNg3bALeSa2heDyUmOl9RetQNuIT+rXRdMTnK8rPbSlCtAo54Ew0BtWF3+AOqAB6o1O5PTZXXYHlifN4B3VOPU2XCc3lOny4D3+3woAAa4ohr35HOsA/5Qx7cCavQCsE21DcQuf2CfOvcD8wJpjIU+9Q6otr0+AdXALxpwLIBGLwDHVdNP3q8FwPPkGgjvllijj549qmUUWFVo8C4N/htoi48oDYANqgFgZ1IS24h4BKxPWaNP/leJ+gcQ13CIIcoA3zjFBJsZ4HXgoeY+4b0v8hDWAD3OGm1PSWu+nO2aC+AkUJMWcYaohWlxmELbl/55PiLXpv069TxEv6qdRD0lgDNAfYr89cA55Z4gaquW7umCqGF9XxPeAop+WgZeAW4r5zCwMQ2tPolXAr9q4nFdDgWvY6If3wPAP8p1g+h/k3AgagAccfbNj8CKAuJXagy6J74AZpVSc5ygDcDvKuiJ3uGqPP4G2E2ua/MnsDmk5hkBLABOObNzDlg6jd9S4LzjdxJYUA7NeQFsB/5SkfeBt51rW4B7zobeXU6tsQAWAaedu34I+NT5fgpYWG6d3gB2ED3WWIwC+8utKxGANUCvftaUW09RIHqze2reNCsIhX8Bsnoz03RAHqIAAAAASUVORK5CYII="
const CommentScreenHeader = ({navigation}) => {
    return (
        <View style={{width:"100%",height:50,justifyContent:"space-between",display:"flex",flexDirection:"row"}}>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",height:50,gap:10}}>
                <TouchableOpacity style={{color:"grey",marginHorizontal:10}} onPress={() => navigation.goBack()}>
              <Image 
              style={{width:40,height:40}}
              source={{uri:BACK_ICON}}/>
          </TouchableOpacity> 
                <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Comments</Text>
            </View>
            <View style={{margin:10}}>
                <Icon IconStyle={styles.postFooterIcon} imgUrl={Icons[2].IconURL}/>
            </View>
        </View>
    )
}

const CommentItem = ({comment,navigation}) => {

    return (
        <>
            <View style={{display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",alignItems:"center",paddingVertical:10}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image source={{uri:comment.profile_picture}} style={styles.postProfileImage}/>
                <Text style={{color:"white",fontWeight:"bold"}}>{comment.user} {' '}</Text>
                <Text style={{color:"white"}}>{comment.comment}</Text>
            </View>
            <View>
                <Image source={{uri:HEART_ICON}} style={{width:20,height:20}}/>
            </View>
        </View>
        </>
    )
}
const CommentBody = ({post,navigation}) => {
    const [commentData, setCommentData] = useState(post.comments)

    useEffect(() => {
        setCommentData(post.comments)
    },[commentData])

    return (
            <>
                {
                    post.comments.map((value,index) => (
                        <CommentItem comment={value} key={index} navigation={navigation}/>
                    ))
                }
            </>
    )
}
const CommentBodyPostDetails = ({post}) =>{
    return (
        <View style={styles.PostHeaderContainer}>
              <Image source={{uri:post.profile_picture}} style={styles.postProfileImage}/>
                
                <View style={{display:"flex",flexDirection:"column"}}>
                <Text style={{color:"white"}}>{post.user}</Text>
                <View style={styles.post}>
                    <Text style={{color:"white"}}>{post.caption}</Text>
                </View>
            </View>
            
          
        </View>
    )
}

const NewCommentSchema = Yup.object().shape({
    postComment: Yup.string().max(200,"comment limit is completed").required("comment is required")
  })


const CommentFooter = ({post, navigation}) => {
    
  const [currentLogginedUser,setCurrentLogginedUser] = useState(null)

  const getCurrentUserName = () => {
    const user = auth().currentUser;
    const data = firestore().collection("users").where("owner_uid", "==" , user.uid).limit(1).onSnapshot(
      snapshot => snapshot.docs.map(doc => {
        setCurrentLogginedUser({
          fullname : doc.data().fullname,
          dp : doc.data().profile_picture
        })
      })
    )
    return data;
  }
  useEffect(() => {
    getCurrentUserName()
    // console.log(currentLogginedUser)
  },[])

  const addPostToFirebase = async (values) => {
    let dataforComment = {
      user: currentLogginedUser.fullname,
      profile_picture:currentLogginedUser.dp,
      owner_uid: auth().currentUser.uid,
      comment:values.postComment,
       owner_email : auth().currentUser.email
    }


    const user = await 
    firestore()
    .collection('users')
    .doc(post.owner_email)
    .collection("post")
    .doc(post.id)
    .update({
           comments: firebase.firestore.FieldValue.arrayUnion(dataforComment)
    })
    .then(() => console.log("comment inserted successfully"))
  return user;
  }

  const initialValue = {
    postComment:"",
  }
    return (
        <Formik 
        initialValues={initialValue} 
        validationSchema={NewCommentSchema}  
        onSubmit={(values) => addPostToFirebase(values)}
        validateOnMount={true}
        
        >
  
          {
            ({handleSubmit,handleBlur,handleChange,errors,isValid,values}) => (
             
        <View style={{backgroundColor:"#202020",flexDirection:"row",paddingVertical:5,paddingHorizontal:10,alignItems:"center",justifyContent:"space-between"}}>
           <View style={{flexDirection:"row"}}>
            <Image source={{uri:post.profile_picture}} style={{width:40,height:40,borderRadius:20,marginHorizontal:5, marginTop:3}}/>
                <TextInput 
                style={{color:"white"}} 
                placeholderTextColor="grey" 
                placeholder={"Comment as " + post.user + "..."}
                onBlur={handleBlur("postComment")}
                onChangeText={handleChange("postComment")}
                value={values.postComment}
                multiline/>
           </View>
            <Pressable onPress={handleSubmit}  disabled={!isValid}>
                <Text style={styles.button(isValid)}>Post</Text>
            </Pressable>
        </View>
            ) }
            </Formik>
    )
}

const CommentScreen = ({route, navigation}) => {
    const {postData} = route.params
  return (
    <View style={styles.container}>
        <CommentScreenHeader navigation={navigation}/>
        <ScrollView>
            <CommentBodyPostDetails post={postData} navigation={navigation}/>
            <CommentBody  post={postData} navigation={navigation}/>
        </ScrollView>
        <CommentFooter post={postData}/>
    </View>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000"
    },
   
    PostHeaderText:{
        color:"white",
    },
    PostHeaderContainer:{
        display:"flex",
        flexDirection:"row", 
        justifyContent:"flex-start",
        borderBottomWidth:1,
        alignItems:"center",
        borderBottomColor:"#1e1e1f",
        paddingVertical:10,
        marginTop:12,
        borderTopStyle:"solid"
    },
    postProfileImage:{
        width:45,
        height:45, 
        borderRadius:50,
        marginHorizontal:10
    },
    post:{
        width:"100%",
    },
    button: (isValid) =>  ({
        color: isValid ? "#0d86fd" : "#1b4d70",
    }),
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