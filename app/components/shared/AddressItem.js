import React,{useState,useEffect} from "react"
import {View,StyleSheet,Text,ImageBackground,Dimensions,AsyncStorage} from "react-native"
import {TouchableOpacity,Image} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"


const AddressItem = ({firstName,lastName,address})=>{
    
        return (
        <TouchableOpacity onPress={()=>console.log(image) }>
            <View style={styles.container}>
                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{marginHorizontal:8}}>
                    
                    <Text style={styles.name}>{firstName}</Text>
                    <Text style={styles.name}>{lastName}</Text>
                    <Text style={styles.name}>{address}</Text>
                   

                </View>
                <View style={{justifyContent:"center",alignItems: "center"}}>
                    <TouchableOpacity onPress={console.log("clicked")}>
                        <Entypo name="trash" size={24} color="black" />                           
                    </TouchableOpacity>
                </View>
                </View>

            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container:{
        margin:5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 120,
        width:Dimensions.get("window").width,
        padding:10,
        backgroundColor:"#fff"
    },
    
    name: {
        color: "black",
        fontSize: 20,
        textAlign: "left",
    },
    
    text:{
        fontSize:20,
        textAlign:"center",
        lineHeight:25
    },



})
export default AddressItem