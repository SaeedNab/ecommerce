import React, {useContext} from 'react'
import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import WishListContainer from "../components/shared/WishListContainer";
import {useSelector} from "react-redux"

const WishList = ({navigation})=>{
    return (
        <View style={styles.wishListContainer}>
            <StatusBar
                animated={true}
                backgroundColor="#d90429"
            />
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>WishList</Text>
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>

                </View>
            </View>
            <WishListContainer navigation={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    wishListContainer:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center"
    },
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
export default WishList