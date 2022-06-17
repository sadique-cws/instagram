import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity,Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import * as ImagePicker from 'react-native-image-picker';


const BACK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2UMQ6AIAxFf42Dx/JE6lFw8jxezOdAYoiDgMHJvqkDeZ+GUslx7gAGWOn5rlYuKUjaakKK5cBK5ADGL+WTy5vJc1NEUredGunqIiRdzB6SC6n+aH1pgJkBLIoPP0jaX971mdpl5/yAEzRhu131PEHxAAAAAElFTkSuQmCC"
const DONE_ICON  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACd0lEQVR4nO2aS2sTURhAzxejlEbcuBC7q1YKFqTYBpdStSJa8B+4DSH+AQWlv0EQ2+5040pKwYWUggsRBI2iNFjSIOhCxcdKDVqbfG6qtENm8pg7kzvjPct55M45GTL3DgGHw+FwOBwOx/+J9PsCoubEjfV9zT16ZnMzW35x+dBb7/5MPy4qLvIL1fHGbl4rcm9XtrF2/FZ1xntMagPkF6rj2pQVhKGtTQMZoeg9LpUB/snD/p17Mu+8x6YugL88FZXGNe/xqQoQIL+m8nu6XBj94j0nNU+BNvKnyoWjH1qdl4oAvcpDCgKEkYeEBwgrDwkOYEIeEhrAlDwkMIBJeUhYANPykKAAUchDQgJEJQ8JCBClPFgeIGp5sDhAHPJgaYC45MHCAHHKg2UB4pYHiwL0Qx4sCRAkL43s1NPS8Meoxs767pnVzOSB2nWEC4o8RgavlgtDddMXECC/uqFy+lVp+JPpMbfjewdMztUugd7etumhSm7GZIS28sWRSOUh6KWo6qhny5Toj/sT8+8HTQxsgzwEvhWWu8BPz0YjEWyRh4AAz4ojqypcpEWEjNYfjN2s7O1lwDY/eNNxykMHT4GJ+fWzoiwBAztPlEf1xq/zldLY904H6+evvR8dPQZNRLBRHrqYB4SJYKs8dDkR6iWCzfLQw0ywmwi2y0OPU+FOIiRBHkKsBYIiqHIF0SUsl4eQi6H8XO2coot4IgDa4rNjn+R0QujVoN+d4MG6b/4vRpbDbSJYKw8G3wf4RLBaHgz+RaZcOLK8tXb4CiDwZEPlpM3yEMEboWN3Xuay33IHn38+/IZZaZr+fIfD4XA4HA6Hw+EwwR9I5OvJGplLGwAAAABJRU5ErkJggg=="
const PLACEHOLDER_IMG = "https://via.placeholder.com/100.jpg"

const NewPostSchema = Yup.object().shape({
  postImageURL: Yup.string().url("post image is required").required("post image is required"),
  postCaption: Yup.string().max(200,"caption limit is completed")
})


const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <NewPostHeader navigation={navigation}/>
        <NewPostByFormik/>
    </SafeAreaView>
  )
}

const NewPostByFormik  = () => {
    const [placeholder,setPlaceholder] = useState(PLACEHOLDER_IMG)

    const initialValue = {
      postCaption:"",
      postImageURL:"",

    }

    const handleSubmitForm = (values) => {
        console.log(values)
    }
    const handleImagePicker = () => {
      let options = {
          title:"select image",
          selectionLimit:0,
          
          storageOptions:{
              skipBackup:false,
              path:"images"
          }
      };

      ImagePicker.launchImageLibrary(options,(res) => {
        console.log(res)
        setPlaceholder(res.assets[0].uri)
      })
    }
    return (
      <Formik 
      initialValues={initialValue} 
      validationSchema={NewPostSchema}  
      onSubmit={(values) => handleSubmitForm(values)}
      
      
      >

        {
          ({handleSubmit,handleBlur,handleChange,errors,isValid,values}) => (
            <>
            <View>
                  <TouchableOpacity onPress={() => handleImagePicker()}>
                  <Image source={{uri:(placeholder != "") ? placeholder : PLACEHOLDER_IMG}} style={{width:100,height:100}}/>
                  <TextInput
                  onBlur={handleBlur('postCaption')} 
                  onChangeText={handleChange('postCaption')}
                  value={values.postCaption}
                  placeholder='write something about you' 
                  style={{height:100,marginTop:10,color:"white"}}  
                  placeholderTextColor="#fff" 
                  multiline={true}/>
                   {errors.postCaption && (
                    <Text style={{color:"red",fontSize:14}}>{errors.postCaption}</Text>
                  )}
                  </TouchableOpacity>
               
                  <TextInput
                  onChange={e => setPlaceholder(e.nativeEvent.text)}
                  onBlur={handleBlur('postImageURL')} 
                  onChangeText={handleChange('postImageURL')}
                  value={values.postImageURL}
                  placeholder='write image url here' 
                  style={{height:100,marginTop:10,color:"white"}}  
                  placeholderTextColor="#fff" 
                />
                  {
                    errors.postImageURL && (
                  <Text style={{color:"red",fontSize:14}}>{errors.postImageURL}</Text>
                  )
                  }
            </View>
            
            <Button onPress={handleSubmit}  title="post"/>
            </>
          )
        }
      </Formik>
    )

}


const NewPostHeader = ({navigation}) => (
  <View style={{flexDirection:"row",padding:10,justifyContent:"space-between",alignItems:"center"}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <TouchableOpacity style={styles.backButtonStyle} onPress={() => navigation.goBack()}>
              <Image 
              style={{width:40,height:40}}
              source={{uri:BACK_ICON}}/>
          </TouchableOpacity>
        <Text style={{color:"white",fontSize:22}}>New Post</Text>
        </View>

      {/* <TouchableOpacity style={styles.backButtonStyle}>
            <Image 
            style={{width:35,height:35}}
            source={{uri:DONE_ICON}}/>
        </TouchableOpacity> */}
    </View>
)

export default NewPostScreen

const styles = StyleSheet.create({
    backButtonStyle:{
        color:"#fff",
    },
  mainContainer:{
    backgroundColor:"black",
    flex:1,
  }
})