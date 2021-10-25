import
    React from "react"
import {View,StyleSheet,Text,FlatList} from "react-native"

import CartItem from "./CartItem";
import {useEffect,useState} from "react"
import {TouchableOpacity} from "react-native";
import NumberFormat from 'react-number-format';
import {useSelector} from "react-redux"
const WishListContainer = ({navigation})=> {
    const [total,setTotal] = useState(0)
    const cart = useSelector(state=>state.cart)

    
    
    const calculateTotal = (cart)=>{
        let price = 0
        if(cart.length>0){

            cart.forEach(product=>{
                 price+= product.count*product.price
              setTotal(price)
              return total
            })
        }else{
            setTotal(0)
        }
    }
    useEffect(()=>{
    
    calculateTotal(cart)
    

    },[cart,total])

    return (
        <View style={styles.container}>
            {cart.length > 0 ? (
                <FlatList keyExtractor={(cart) => cart._id.toString()}
                renderItem={({item,index}) => index === cart.length-1?<View style={{width:"100%"}}><CartItem product={item} image={item.img[0]} name={item.name} price={item.price} count={item.count}/><TouchableOpacity style={{width: '80%',height:60,marginHorizontal: "10%",marginVertical:20,backgroundColor:"#ef233c",alignItems: 'center',justifyContent:"center"}} onPress={()=>navigation.navigate('Home')}><Text style={{fontSize:17,color:"white"}}>continue shopping</Text></TouchableOpacity></View>:<CartItem product={item} image={item.img[0]} name={item.name} price={item.price} count={item.count}/> } data={cart}/>
            ):<TouchableOpacity style={{width: '80%',height:60,marginHorizontal: "10%",marginVertical:20,backgroundColor:"#ef233c",alignItems: 'center',justifyContent:"center"}}><Text style={{fontSize:17,color:"white"}}>continue shopping</Text></TouchableOpacity>}
            
            <View style={{
                height: 100,
                backgroundColor: "#fff",
                width: "100%",
                padding: 10,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View>
                    <Text style={{textAlign: "left",color:"#757575",fontWeight:"bold"}}>Total</Text>
                    <NumberFormat value={total} style={styles.price} displayType={'text'} thousandSeparator={true} prefix={''} renderText={(value, props) => <Text {...props}>{value+'$'}</Text>} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
                    <View
                        style={{backgroundColor: "red", borderRadius: 50, paddingVertical: 10,paddingHorizontal:20}}>
                            <Text style={{color: "white",fontWeight: "bold",fontSize:17}}>checkout</Text>
                            </View>
                </TouchableOpacity>
            </View>
        </View>
    )
    

    

}

const styles = StyleSheet.create({
container:{
    justifyContent:"space-between",
    alignItems:"center",
    width: '100%',
    flex: 1,
},
price:{
    marginVertical:10
}


})
export default WishListContainer