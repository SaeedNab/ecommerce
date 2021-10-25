import React, {useContext, useState,useEffect} from 'react';
import {View, Text, StyleSheet,StatusBar, Image, ScrollView,ActivityIndicator} from "react-native"
import Screen from "../components/shared/Screen";
import DataContext from "../context/DataContext";
import CategoryContainer from "../components/shared/CategoryContainer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useSelector} from "react-redux"


const Orders = ({navigation,route})=>{
    return (
        <Screen>
            <StatusBar
                animated={true}
                backgroundColor="#d90429"
                 />
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Orders</Text>
                </View>
            </View>
            <View style={{flex:1}}>

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
    }
})
export default Orders;