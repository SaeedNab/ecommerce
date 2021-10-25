import React from "react"
import {View,StyleSheet,Text,ImageBackground,Dimensions} from "react-native"
import {TouchableOpacity,Image} from "react-native";
import Seprator from "./Seprator";
import NumberFormat from 'react-number-format';
const WishListItem = ({image,text,price})=>{
    return (

            <View style={styles.container}>

                <Image source={{uri:`${http.url}uploads/${image[0].split('/')[3]}`}} resizeMode="contain" style={styles.image}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{text}</Text>
                    <NumberFormat value={price} style={styles.price} displayType={'text'} thousandSeparator={true} prefix={''} renderText={(value, props) => <Text {...props}>{value}</Text>} />
                </View>

            </View>


    )
}


const styles = StyleSheet.create({
    container:{
    
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 120,
        width:Dimensions.get("window").width,
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:"#fff",
        borderBottomWidth:0.5,
        borderColor:"#a2a6a3"
    },
    image: {
        height:"100%",
        width:Dimensions.get("window").width/3
    },
    name: {
        color: "#555755",
        fontSize: 16,
        textAlign: "left",
    },
    price: {
        color: "#555755",
        fontSize: 16,
        marginVertical:5,
        textAlign: "left",
    },
    textContainer:{
        marginHorizontal:10
    }


})
export default WishListItem