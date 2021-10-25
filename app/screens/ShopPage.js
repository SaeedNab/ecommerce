import React, {useContext, useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image, ScrollView,ActivityIndicator} from "react-native"
import Screen from "../components/shared/Screen";
import DataContext from "../context/DataContext";
import CategoryContainer from "../components/shared/CategoryContainer";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useSelector} from "react-redux"


const ShopPage = ({navigation,route})=>{
    const categories = useSelector(state=>state.categories)
    const [getLoading,setLoading] = useState([true])
    useEffect(()=>{
        const getData = async ()=>{
            setLoading(false)
           

        }
        getData()

    },[])
    return (
        <Screen>
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Shop Pages</Text>
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>

                </View>
            </View>
            <View style={{flex:1}}>
                <Text style={{textAlign:"right",margin:10}}>Categories</Text>
                <CategoryContainer categories={categories} navigation={navigation}/>

            </View>
            {getLoading &&     <ActivityIndicator size="large" color="#00ff00" />
}
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
export default ShopPage;