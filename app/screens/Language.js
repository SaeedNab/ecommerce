import React, {useContext, useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView,ActivityIndicator,TouchableOpacity,StatusBar} from "react-native"
import Screen from "../components/shared/Screen";
import DataContext from "../context/DataContext";
import CategoryContainer from "../components/shared/CategoryContainer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import {useSelector} from "react-redux"


const Language = ({navigation,route})=>{
    return (
        <Screen>
            <StatusBar
                animated={true}
                backgroundColor="#d90429"
                 />
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Change Language</Text>
                </View>
            </View>
            <View style={{flex:1}}>
            <TouchableOpacity>
        <View style={styles.quantity}>
                    <Text>Farsi</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft: 10}}>
                    <Entypo name="check" size={24} color="black" />                    
                    </View>
                </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.quantity}>
                    <Text>English</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft: 10}}>
                    <Entypo name="check" size={24} color="black" />                    
                    </View>
                </View>
        </TouchableOpacity>
            </View>

        </Screen>
    )
}
const styles = StyleSheet.create({
   
    customHeader:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:60,
        marginTop:15,
        backgroundColor:"#ef233c",
        flexDirection:"row"
    },
    headerRight:{
        marginHorizontal:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:"100%",
        alignContent:"center"
    },
    headerLeft:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:"100%",
        alignContent:"center"
    },
    headerTitle:{
        color:"#fff",
        fontWeight:"bold"
    },
    quantity:{
        marginVertical:10,
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between",
        padding: 10
    },
})
export default Language;