import {TouchableOpacity} from "react-native";
import http from './../../api/index'
const CategoryItem = ({image,text,navigation,id})=>{
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Products',{title:text,id}) }>
            <View style={styles.container}>
                <ImageBackground source={{uri:`${http.url}uploads/${image.split('/')[3]}`}} resizeMode="contain" style={styles.image}>
                    <Text style={styles.text}>{text}</Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>

)
}
import React from "react"


import {View,StyleSheet,Text,ImageBackground,Dimensions} from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        marginTop:20,
        height: 170,
        width:Dimensions.get('window').width/2,
        padding:10
    },
    image: {
        flex: 1,
        justifyContent: "flex-end"
    },
    text: {
        padding:5,
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }


})
export default CategoryItem