import React, {useEffect,useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,ToastAndroid,AsyncStorage,ActivityIndicator} from 'react-native'
import Toast from 'react-native-tiny-toast'
import ErrorMessage from "../components/form/ErrorMessage";
import ProfileTextInput from "../components/form/ProfileTextInput";
import TextArea from "../components/form/TextArea";
import { getAddresses } from '../api/UserApi';
import AddressContainer from "../components/shared/AddressContainer"
import jwt from "jwt-decode"
const Addresses = ({navigation,route})=>{
    const [addresses,setAddresses] = useState([])
    const [token,setToken] = useState("")
    const [loading,setLoading] = useState(true)
    const [id,setId] = useState("")
    const [status,setStatus] = useState(0)
   
    useEffect(()=>{
        const getData = async ()=>{
            const token = await AsyncStorage.getItem("token")
            console.log(jwt(token).id)
                const data = await getAddresses(jwt(token).id)
                setLoading(false)
                // console.log(data)
                setAddresses(data)
            

        
         
           
        }
      
        getData()

    },[])
  
        

    
    return (
        <View style={styles.myAccountContainer}>
             <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Shipping Address</Text>
                </View>
            </View>
            {loading?(<ActivityIndicator size="small" color="#000" />):(
                 <View style={{flex:1,justifyContent: 'space-between'}}>
                 <View style={{flex:1}}>
                     <AddressContainer addresses={addresses} />
                 </View>
                 <View style={{flexDirection: 'row',height:60,justifyContent: 'center',alignItems:"center"}}>
                 <TouchableOpacity style={styles.submit}><Text style={{color:"white"}} onPress={()=>navigation.navigate("ShippingAddress")}>add address</Text></TouchableOpacity>
 
                 </View>
             </View>
            )}
            {/* <View style={{flex:1,justifyContent: 'space-between'}}>
                <View style={{flex:1}}>
                    <AddressContainer addresses={address} />
                </View>
                <View style={{flexDirection: 'row',height:60,justifyContent: 'center',alignItems:"center"}}>
                <TouchableOpacity style={styles.submit}><Text style={{color:"white"}} onPress={()=>navigation.navigate("ShippingAddress")}>add address</Text></TouchableOpacity>

                </View>
            </View> */}
            
           


        </View>
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
    },
        myAccountContainer:{
            width:"100%",
            flex:1,
            justifyContent:"flex-start",
            alignItems:"center"
        },
    
        button:{
            backgroundColor:"#000",
            width:Dimensions.get("window").width/1.5,
            color:"white",
            borderRadius:20,
            padding:10,
            marginHorizontal:20,
            marginVertical:10
    
        },
        texts:{
            width:Dimensions.get("window").width/2,
            textAlign:"right",
            marginHorizontal:20,
            marginVertical:5
        
    },
    inputSection:{
        marginTop:10,
    },submit:{
        width:200,
        backgroundColor: "red",
        padding: 10,
        borderWidth:0.5,
        borderColor: "#b9b7bd",
        borderRadius:10, 
        justifyContent: "center",
        color: "#fff",
        marginVertical:10,
        alignItems: "center",

    }

})
export default Addresses;