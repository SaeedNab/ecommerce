import React,{useEffect,useState} from "react"
import {View,StyleSheet,Text,Dimensions,AsyncStorage} from "react-native"
import {Image} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import NumberFormat from 'react-number-format';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux';
import {addToWishList,removeFromWishList} from "../../actions/wishListAction"
const Item = ({image,text,price,id,item})=>{
    const dispatch = useDispatch()
    const wishList = useSelector(state=>state.wishList)
    const [wishListStored,setWishListStored] = useState([])
    const wishListAddHandler = async (product)=>{
        dispatch(addToWishList(product))
        await AsyncStorage.setItem("wishList",wishList)

    }
    const wishListRemoveHandler = async (product)=>{
        dispatch(removeFromWishList(product))
        await AsyncStorage.setItem("wishList",wishList)
        

    }
    async function getAsyncStorageData(){
        setWishListStored(await AsyncStorage.getItem("wishList") ?? wishList);
        await AsyncStorage.removeItem("wishList");
    }
    useEffect(()=>{
        getAsyncStorageData()
    })
    return (
            <View style={styles.container}>
                 {
                     
                     wishListStored.findIndex(element=>element._id == id) == -1 ? (
                        <MaterialCommunityIcons name="heart-outline" size={24} color="black" style={{marginHorizontal:8}} onPress={()=>wishListAddHandler(item)}/>
                        ):(
                        <MaterialCommunityIcons name="heart" size={24} color="black" style={{marginHorizontal:8}} onPress={()=>wishListRemoveHandler(item)}/>

                    )
                }
                <Image source={{uri:`${http.url}uploads/${image.split('/')[3]}`}} resizeMode="contain" style={styles.image}/>
                <Text style={styles.txtName}>{text}</Text>
                <NumberFormat value={price} style={styles.txtPrice} displayType={'text'} thousandSeparator={true} prefix={''} renderText={(value, props) => <Text {...props}>{value}</Text>} />
           </View>

    )
}


const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
        borderRadius:10,
        borderColor:"#737373",
        marginTop:20,
        marginHorizontal:10,
        width:Dimensions.get("window").width/2.2,
        padding:10,
        backgroundColor:"#fff"
    },
    image: {
        height:150,
        width:"100%"
    },
    txtName: {
        color: "black",
        marginTop:30,
        fontSize: 13,
        textAlign: "left",
    },
    txtPrice: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "left",
        marginTop:20,
    }


})
export default Item