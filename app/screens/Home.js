import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, StatusBar, ScrollView, Alert, BackHandler,ActivityIndicator} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import CategoryContainer from "../components/shared/CategoryContainer";
import ItemContainer from "../components/shared/ItemContainer";
import {getCategories} from "../actions/categoryAction"
import {getAllProducts} from "../actions/productAction"
import { useDispatch,useSelector} from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
const confirmationAlert = ()=>{
    Alert.alert('ارتباط با سرور','برای استفاده از اپلیکیشن باید به اینترنت متصل باشید',[
        {
            text:'باشه',
            onPress: BackHandler.exitApp,
        }
    ],{cancelable : false})
}
const Home = ({navigation})=>{
    const categories = useSelector(state=>state.categories)
    const products = useSelector(state=>state.products)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const checkForNet = async ()=>{
            const state = await NetInfo.fetch()
            if(!state.isConnected) confirmationAlert()
        }
        checkForNet()
        const getData = async ()=>{
            try{

                dispatch(getCategories())
                dispatch(getAllProducts())
                if(products[0].length>0 && categories.length>0){

                    setLoading(false)
                }
            }catch(e){
                setLoading(false)
            }
            
        }
        getData()


    },[])

    return (
        <View style={styles.homeContainer}>
            <StatusBar
                animated={true}
                backgroundColor="#d90429"
                 />
              
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name="menu" size={24} color={"white"} style={{marginHorizontal:8}} onPress={()=>navigation.toggleDrawer()}/>
                    <Text style={styles.headerTitle}>Home</Text>
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>
                    <MaterialCommunityIcons name="heart-outline" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("WishList")}/>

                </View>
            </View>
            {loading ? (<View style={styles.loadingContainer}>

                <ActivityIndicator size="small" color="#000"/>
            </View>
                 ):(
                    <View style={{flex:1}}>
                    <ScrollView>
                        <CategoryContainer categories={categories} hasHeader={true} navigation={navigation}/>
                        <ItemContainer type={"best"} products={products[0]} hasHeader={true} title={"پرفروش ترین محصولات"} navigation={navigation} />
                        <ItemContainer type={"new"} products={products[0]} hasHeader={true} title={"جدیدترین محصولات"} navigation={navigation} />
                    </ScrollView>
    
                </View>  
                 )}
          

        </View>
    )
}
const styles = StyleSheet.create({
    homeContainer:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",

    },
    loadingContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

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
export default Home