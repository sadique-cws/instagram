import  React, { useState } from "react";
import { TouchableOpacity,Image,StyleSheet,View } from "react-native";




const BottomIcons = ({Bicons,navigation}) => {

    const [active,setActive] = useState("home");

    const handleClick = (name) => {
        setActive(name); 
        navigation.push(name)
    }
    
    const Icon = ({icon}) => (

        <TouchableOpacity onPress={() => handleClick(icon.name)}>
            <Image 
            source={{uri: active===icon.name ? icon.activeURL: icon.inActiveURL}}  
            style={
            (icon.name === "profile")?
            (active === "profile")? [styles.bottomIcon,styles.profileStyle,styles.borderWidthStyle]:
            [styles.bottomIcon,styles.profileStyle]: styles.bottomIcon}/>
        </TouchableOpacity>
    )



    return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {
                        Bicons.map((value,index) => (
                            <Icon key={index} icon={value}/>
                        ))
                    }
                </View>
            </View>
    )

}

const styles = StyleSheet.create({
    wrapper:{
        position:"absolute",
        zIndex:999,
        borderTopColor:"#1e1e1f",
        borderTopWidth:2,
        borderStyle:"solid",
        bottom:0,
        width:"100%"
    },
    container:{
        flexDirection:"row",
        backgroundColor:"black",
        height:50,
        padding:10,
        justifyContent:"space-around",

    },
    bottomIcon:{
        width:30,
        height:30,
    },
    profileStyle:{
        borderRadius:15
    },
    borderWidthStyle:{
        borderWidth:2,
        borderColor:"#fff"   
    }
});

export default BottomIcons;