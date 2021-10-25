import React, {useEffect,useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,ToastAndroid,AsyncStorage} from 'react-native'
import Toast from 'react-native-tiny-toast'
import ErrorMessage from "../components/form/ErrorMessage";
import ProfileTextInput from "../components/form/ProfileTextInput";
import TextArea from "../components/form/TextArea";
import { addAddress } from '../api/UserApi';
import jwt from "jwt-decode"
const ShippingAddress = ({navigation,route})=>{
    const [response,setResponse] = useState();
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [address,setAddress] = useState("")
    const [token,setToken] = useState("")
    const [id,setId] = useState("")
    const [firstNameError,setFirstNameError] = useState(true)
    const [lastNameError,setLastNameError] = useState(true)
    const [addressError,setAddressError] = useState(true)
    useEffect(()=>{
        const getToken = async ()=>{
            await AsyncStorage.getItem("token").then(token=>setToken(jwt(token)))
            setId(token.id)
        }
        getToken()
    })
    const handleAddAddress = async (firstName,lastName,address)=>{
        console.log(firstName,lastName,address)
        if(firstName.length < 3){
            setFirstNameError(true)
            ToastAndroid.show("first name must be at least 3 characters",ToastAndroid.SHORT)

        }else{
            setFirstNameError(false)

        }
        if(lastName.length < 3){
            setLastNameError(true)
            ToastAndroid.show("last name must be at least 3 characters",ToastAndroid.SHORT)

        }else{
            setLastNameError(false)
            
        }
         if(address.length < 30){
            setAddressError(true)
            ToastAndroid.show("address must be at least 30 characters",ToastAndroid.SHORT)

        }
        else{
            setAddressError(false)
            console.log(firstNameError, lastNameError, addressError)
            console.log("clicked")
        }
        if(firstNameError === false && lastNameError === false && addressError === false){
            Toast.showLoading('loading...')
            const {status} = await addAddress({firstName,lastName,address},id)
            if(status===200){
                Toast.hide()
                Toast.showSuccess('done!')

            }else{
                Toast.hide()
                Toast.showError('error happened')
            }

        }
        

    }
    return (
        <View style={styles.myAccountContainer}>
             <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Shipping Address</Text>
                </View>
            </View>
            <View style={{flex:1,justifyContent: 'space-between'}}>
                <View style={{flex:1}}>
                <ScrollView>
                <View style={{flex:1}}>
         
                        <View style={{marginTop:50}}>
                            <View style={styles.inputSection}>
                                
                                <Text>first name</Text>
                                <ProfileTextInput
                                    autoCorrect={false}
                                    onChangeText={(text)=>setFirstName(text)}
                                    value={firstName}
                                    />
                               
                            </View>
                            <View style={styles.inputSection}>
                                <Text>last name</Text>
                                <ProfileTextInput
                                    autoCorrect={false}
                                    onChangeText={(text)=>setLastName(text)}
                                    value={lastName}
/>

                            </View>
                            <View style={styles.inputSection}>
                                <Text>address</Text>
                                <TextArea
                                multiline={true}
                                numberOfLines={5}
                                    autoCorrect={false}
                                    onChangeText={(text)=>setAddress(text)}
                                    value={address}
                                />
                                
                            </View>
                        </View>


            </View>
            </ScrollView>
                </View>
                <View style={{flexDirection: 'row',height:60,justifyContent: 'center',alignItems:"center"}}>
                <TouchableOpacity style={styles.submit}><Text style={{color:"white"}} onPress={()=>handleAddAddress(firstName,lastName,address)}>submit</Text></TouchableOpacity>

                </View>
            </View>
            
           


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
export default ShippingAddress;