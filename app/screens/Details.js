import React, {useState,useEffect} from 'react'
import Screen from "../components/shared/Screen"
import {ScrollView,StyleSheet, Text, TouchableOpacity, View,ImageBackground,AsyncStorage} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Dimensions} from "react-native";
import Seprator from "../components/shared/Seprator";
import NumberFormat from "react-number-format";
import { Entypo } from '@expo/vector-icons';
import CollipsibleText from "./../components/shared/CollipsibleText"
import { useDispatch } from 'react-redux';
import {addToWishList,removeFromWishList} from "../actions/wishListAction"
import {addToCart,removeFromCart} from "../actions/cartAction"
import {useSelector} from "react-redux"


const Details = ({navigation,route})=>{
    const cart = useSelector(state=>state.cart)
    
    let index = 0
    const [count,setCount] = useState(0)
   useEffect(()=>{

    const x = cart.findIndex(element=>element._id == route.params.item._id)
    if(x != -1){
        setCount(cart[x].count)
    }
   })
    const dispatch = useDispatch()
    const wishList = useSelector(state=>state.wishList)
    const wishListAddHandler = async (product)=>{
        dispatch(addToWishList(product))
        await AsyncStorage.setItem("wishList",wishList)

    }
    const wishListRemoveHandler = async (product)=>{
        dispatch(removeFromWishList(product))
        await AsyncStorage.setItem("wishList",wishList)

    }
    const addToCartHandler = async (product,count)=>{
        dispatch(addToCart({...product,count}))
        await AsyncStorage.setItem("cart",JSON.stringify(cart))

    }
    const handlePlusButton = async (product)=>{
        index = cart.findIndex(item => item._id == route.params.item._id);
        
        if(index != -1){
            
            setCount(cart[index].count+1)
          
        }else{
            setCount(count+1)
        }
    }
    const handleMinusButton = async (product)=>{
        index = cart.findIndex(item => item._id == route.params.item._id)
        if(index != -1){
            if(count > 1){
                setCount(cart[index].count-1)
               
            }

        }
    }
    
    const {name} = route.params.item
    const {description} = route.params.item
    const {img} = route.params.item
    const {price} = route.params.item
    return (
        <Screen style={{backgroundColor:"#fff"}}>
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name="menu" size={24} color={"white"} style={{marginHorizontal:8}} onPress={()=>navigation.toggleDrawer()}/>
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>
                    <MaterialCommunityIcons name="basket-outline" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Cart")}/>
                    <MaterialCommunityIcons name="heart-outline" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("WishList")}/>
                </View>
            </View>
            
            <View style={{flex:1,justifyContent:"flex-start"}}>
                <ScrollView>
                <ImageBackground style={styles.imageContainer} resizeMode={"contain"} source={{uri:`${http.url}uploads/${img[0].split('/')[3]}`}}></ImageBackground>

<View style={{width:Dimensions.get("window").width,backgroundColor:"#fff",padding:10}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
    {
        wishList.findIndex(element=>element._id == route.params.item._id) == -1 ? (
            <MaterialCommunityIcons name="heart-outline" size={24} color="black" style={{marginHorizontal:8}} onPress={()=>wishListAddHandler(route.params.item)}/>
            ):(
            <MaterialCommunityIcons name="heart" size={24} color="black" style={{marginHorizontal:8}} onPress={()=>wishListRemoveHandler(route.params.item)}/>

        )
    }
    <TouchableOpacity onPress={()=>console.log('')}><Text style={{marginVertical:10,fontSize:20}}>{name}</Text></TouchableOpacity>
    </View>
    <Seprator/>
    <NumberFormat value={price} style={styles.txtPrice} displayType={'text'} thousandSeparator={true} prefix={''} renderText={(value, props) => <Text {...props}>{value}</Text>} />
    <View style={styles.quantity}>
        <Text>Quantity</Text>
        <View style={{display:'flex',flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>handleMinusButton(route.params.item)}>
                <View style={styles.minus}>
                <Entypo name="minus" size={24} color="black" />                           
                 </View>
            </TouchableOpacity>
            <View style={styles.count}>
                <Text style={styles.text}>{count}</Text>
            </View>
            <TouchableOpacity onPress={()=>handlePlusButton(route.params.item)}>
                <View style={styles.plus}>
                <Entypo name="plus" size={24} color="black" />        
                                    </View>
            </TouchableOpacity>
        </View>
    </View>
    <CollipsibleText header={"description"} content={description}/>
    <Seprator/>
    <Seprator/>
    <CollipsibleText header={"specification"} content={""}/>
    <Seprator/>

    <CollipsibleText header={"how to use"} content={""}/>

    <Seprator/>
    
    <CollipsibleText header={"reviews"} content={""}/>

    <Seprator/>
</View>

                </ScrollView>
          
            </View>
             
    <View style={{flexDirection: 'row',height: 60,backgroundColor:"#fff",justifyContent:"flex-start",alignItems: 'center',padding: 10}}>
        <TouchableOpacity style={{flex: 1,backgroundColor:"red",padding:10,marginHorizontal:10}} onPress={()=>addToCartHandler(route.params.item,count)}>
            <Text style={{textAlign: 'center',color: 'white'}}>add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1,backgroundColor:"black",padding: 10,marginHorizontal:10}}>
            <Text style={{textAlign:"center",color: 'white'}}>buy now</Text>
        </TouchableOpacity>

</View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    homeContainer:{
        padding:10,
        flex:1,
        justifyContent:"flex-start",
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
    },
    quantity:{
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    minus:{
        width:28,
        height:28,
        borderWidth:2,
        marginHorizontal:3,
        borderColor: "black",
        fontSize:20,
        borderRadius:5,
        textAlign:"center"
    },
    plus:{
        width:28,
        height:28,
        marginHorizontal:3,
        borderWidth:2,
        borderColor: "black",
        borderRadius:5
    },
    count:{
        width:28,
        height:28,
        marginHorizontal:3,
        borderRadius:5,
        backgroundColor:"#e0e0e0"
    },
    text:{
        fontSize:20,
        textAlign:"center",
        lineHeight:25
    },
    txtPrice: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "right",
        marginTop:10,
    },
    imageContainer:{
        width:"100%",
        height:200
    }
})



export default Details