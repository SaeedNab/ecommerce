import React,{useState,useEffect} from "react"
import {View,StyleSheet,TouchableOpacity,FlatList,AsyncStorage,Text} from "react-native"
import WishListItem from "./WishListItem";
import {useSelector} from "react-redux"

const WishListContainer = ({navigation})=>{
    const [wishListStored,setWishListStored] = useState([])
    const [count,setCount] = useState(0)
    const wishList = useSelector(state=>state.wishList)
    async function getAsyncStorageData(){
        setWishListStored(await AsyncStorage.getItem("wishList") ?? wishList);
        await AsyncStorage.removeItem("wishList");
        setCount(wishListStored.length)
    }
    useEffect(()=>{
        getAsyncStorageData()
    })
   return (
    <View style={styles.container}>
       {wishListStored.length>0 ? (<FlatList keyExtractor={(wishList)=>wishList._id.toString()} renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate("Details",{item:item})}><WishListItem image={item.img} text={item.name} price={item.price}/></TouchableOpacity>}  data={wishListStored} />):(<Text style={{color:"red",textAlign:"center",marginVertical:20,fontSize:20}}>your wishList is empty</Text>)
                    }
   </View>
                    )

}

const styles = StyleSheet.create({
container:{
    width: '100%',
    flex: 1,
}


})
export default WishListContainer