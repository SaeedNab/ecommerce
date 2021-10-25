import React, {useContext} from 'react'
import {View,Text,StyleSheet,StatusBar} from 'react-native'
import Screen from "../components/shared/Screen"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import CartContainer from "../components/shared/CartContainer";
import{useSelector} from "react-redux"
const Cart = ({navigation})=>{
    
    return (
        <Screen style={styles.cartContainer}>
            <StatusBar
                animated={true}
                backgroundColor="#d90429"
                 />
             <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Cart</Text>
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>
                    <MaterialCommunityIcons name="heart-outline" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("WishList")}/>

                </View>
            </View>
            <CartContainer navigation={navigation}/>
        </Screen>
    )
}
const styles = StyleSheet.create({
    cartContainer: {
        flex:1,
        justifyContent:"center",
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
export default Cart