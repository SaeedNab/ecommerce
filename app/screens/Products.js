import React, {useContext, useState, useCallback, useMemo, useRef,useEffect} from 'react'
import {View, Text, StyleSheet, StatusBar, FlatList,Pressable,ActivityIndicator,TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Item from "../components/shared/Item";
import Screen from "../components/shared/Screen";
import BottomSheet from '@gorhom/bottom-sheet';
import {getProductsByCategory} from './../api/ProductApi'




const Products = ({navigation,route,last,best}) => {
    const [loading,setLoading] = useState(true)
    const {title,id} = route.params 
    // variables

    // callbacks
   
    const [getProducts,setProducts] = useState([])
    useEffect(() => {
        if(last){
            var getData = async()=>{
                try{
                    const data = await getProducts()
                    setLoading(false)
                    setProducts(data.new)
                }catch(e){
                    setLoading(false)
                    console.log(e)
                }
            }
        }else if(best){
            var getData = async()=>{
                try{
                    const data = await getProducts()
                    setLoading(false)
                    setProducts(data.best)
                }catch(e){
                    setLoading(false)
                    console.log(e)
                }
            }
        }else{
            var getData = async()=>{
                try{
                    setLoading(false);
                    const products = await getProductsByCategory(id)
                    setProducts(products)
                }catch(e){
                    setLoading(false)
                    console.log(e)
                }
            }
        }

        
        getData();
    },[])
    return (
        <Screen>

            <StatusBar
                animated={true}
                backgroundColor="#d90429"
            />
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal: 8}}
                                            onPress={() => navigation.navigate("Search")}/>
                    
                </View>
            </View>
            {/* <View style={styles.topBox}>
                <View style={styles.sortBox}>
                    <Text>مرتب سازی</Text>
                    <MaterialCommunityIcons name="sort-variant" size={24} color="black"/>
                </View>
                <Pressable onPress={handlePresentModalPress}  style={styles.filterBox}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <Text>فیلتر
                        </Text>
                        <MaterialCommunityIcons name="filter-outline" size={24} color="black"/>
                    </View>
                </Pressable>
               
            </View> */}
            {loading ? (<View style={styles.loadingContainer}>

<ActivityIndicator size="small" color="#000"/>
</View>):(

<View style={styles.products}>
<FlatList numColumns={2} keyExtractor={(getProducts)=>getProducts._id.toString()} renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate("Details",{name:item.name,image:item.img[0],description:item.description,price:item.price,item:item})}><Item image={item.img[0]} text={item.name} price={item.price}/></TouchableOpacity> } data={getProducts} />

</View>

)}
        </Screen>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    customHeader: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        marginTop:15,
        backgroundColor: "#ef233c",
        flexDirection: "row"
    },
    headerRight: {
        marginHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        alignContent: "center"
    },
    headerLeft: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        alignContent: "center"
    },
    headerTitle: {
        color: "#fff",
        fontWeight: "bold"
    },
    topBox: {
        flexDirection: "row",
        width: "100%",
        height: 40,
        backgroundColor: "#fff"
    },
    sortBox: {
        flexDirection:"row",
        borderWidth: 0.5,
        borderColor: "#b9b7bd",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }, filterBox: {
        borderWidth: 0.5,
        borderColor: "#b9b7bd",
        flexDirection:"row",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    products:{
        height:"auto",
        width: "100%",
        // height:200,
        // display:"flex",
        flex:1,
        backgroundColor: "#fff",
        // flexDirection: "column"
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})
export default Products