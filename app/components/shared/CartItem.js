import React,{useState,useEffect} from "react"
import {View,StyleSheet,Text,ImageBackground,Dimensions,AsyncStorage} from "react-native"
import {TouchableOpacity,Image} from "react-native";
import NumberFormat from 'react-number-format';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import {addToCart,removeFromCart,plusToCart,minusFromCart} from "../../actions/cartAction"
import {useSelector} from "react-redux"


const WishListItem = ({image,name,price,product})=>{
    let index = 0
    const cart = useSelector(state=>state.cart)
    const [cartStored,setCartStored] = useState([])
    const x = cart.findIndex(element=>element._id == product._id)
    const [count,setCount] = useState(cart[x].count)
    const dispatch = useDispatch()
    useEffect(()=>{
        
    },[cartStored])
    const handlePlusButton = async (product)=>{
        index = cart.findIndex(item => item._id == product._id);
        
        if(index != -1){
            
            setCount(cart[index].count+1)
            dispatch((plusToCart(product)));
            await AsyncStorage.setItem("cart", JSON.stringify(cart));
            setCartStored(await AsyncStorage.getItem("cart"));
        }else{
            setCount(1)
            dispatch((addToCart(product)));
            await AsyncStorage.setItem("cart", JSON.stringify(cart));
            setCartStored(await AsyncStorage.getItem("cart"));
        }

    }
    const removeFromCartHandler = async (product)=>{
        dispatch((removeFromCart(product)));
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
        setCartStored(await AsyncStorage.getItem("cart"));
    }
    const handleMinusButton = async (product)=>{
        index = cart.findIndex(item => item._id == product._id);
        if(index != -1){
            if(count > 1){
                setCount(cart[index].count-1)
                dispatch((minusFromCart(product)));
                await AsyncStorage.setItem("cart", JSON.stringify(cart));
                setCartStored(await AsyncStorage.getItem("cart"));
            }
        

    }
}
        return (
        <TouchableOpacity onPress={()=>console.log(image) }>
            <View style={styles.container}>
                <Image source={{uri:`${http.url}uploads/${image.split('/')[3]}`}} resizeMode="contain" style={styles.image}/>
                <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{marginHorizontal:8}}>
                    
                    <Text style={styles.name}>{name}</Text>
                    <NumberFormat value={price} style={styles.price} displayType={'text'} thousandSeparator={true} prefix={''} renderText={(value, props) => <Text {...props}>{value}</Text>} />
                    <View style={{display:'flex',flexDirection:"row"}}>
                        <TouchableOpacity onPress={()=>handleMinusButton(product)}>
                            <View style={styles.minus}>
                            <Entypo name="minus" size={24} color="black" />                           
                            </View>
                        </TouchableOpacity>
                        <View style={styles.count}>
                            <Text style={styles.text}>{cart[cart.findIndex(item=>item._id == product._id)].count}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>handlePlusButton(product)}>
                            <View style={styles.plus}>
                            <Entypo name="plus" size={24} color="black" />                           
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>

                    {/* <MaterialCommunityIcons name="delete-outline" size={24} color="black" style={{marginHorizontal:8,marginVertical:5}} /> */}
                    </View>

                </View>
                <View>
                    <TouchableOpacity onPress={()=>removeFromCartHandler(product)}>
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
    image: {
        height:"100%",
        width:Dimensions.get("window").width/3
    },
    name: {
        color: "black",
        fontSize: 20,
        textAlign: "left",
    },
    price: {
        color: "black",
        fontSize: 16,
        marginTop:10,
        marginBottom:5,
        fontWeight: "bold",
        textAlign: "left",
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



})
export default WishListItem