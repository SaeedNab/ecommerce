import React, {useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Dimensions,ToastAndroid,AsyncStorage} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import Toast from 'react-native-tiny-toast'
import ErrorMessage from "../components/form/ErrorMessage";
import ProfileTextInput from "../components/form/ProfileTextInput";
import jwt from "jwt-decode"
import {changePassword} from "../api/UserApi"

const ChangePassword = ({navigation,route})=>{
    const [token,setToken] = useState("")
    const [id,setId] = useState("")
    const [oldPassword,setOldPassword] = useState("")
    const [oldPasswordError,setOldPasswordError] = useState(true)
    const [newPassword,setNewPassword] = useState("")
    const [newPasswordError,setNewPasswordError] = useState(true)
    const [newPasswordConfirmation,setNewPasswordConfirmation] = useState("")
    const [newPasswordConfirmationError,setNewPasswordConfirmationError] = useState(true)
    useEffect(()=>{
        const getToken = async ()=>{
            await AsyncStorage.getItem("token").then(token=>setToken(jwt(token)))
            setId(token.id)
        }
        getToken()
    })
        const handleChangePassword = async (oldPassword,newPassword,newPasswordConfirmation)=>{
            if(oldPassword.length < 10){
                setOldPasswordError(true)
                ToastAndroid.show("current password is invalid",ToastAndroid.SHORT)

            }else{
                setOldPasswordError(false)
    
            }
            if(newPassword.length < 10){
                setNewPasswordError(true)
                ToastAndroid.show("new password must be at least 10 characters",ToastAndroid.SHORT)

            }else{
                setNewPasswordError(false)
                
            }
            if(newPasswordConfirmation.length < 10){
                ToastAndroid.show("new password confirmation must be at least 10 characters",ToastAndroid.SHORT)

            }else{
                setNewPasswordConfirmationError(false)
                
            }
            if(newPassword !== newPasswordConfirmation){
                setNewPasswordConfirmationError(true)
                ToastAndroid.show("new password and new password confirmation are different",ToastAndroid.SHORT)


            }else{
                setNewPasswordConfirmationError(false)
            }
            if(oldPasswordError === false && newPasswordError === false && newPasswordConfirmationError === false){
                Toast.showLoading('loading...')
            const {status} = await changePassword({oldPassword,newPassword},id)
            if(status===200){
                Toast.hide()
                Toast.showSuccess('done!')

            }else{
                Toast.hide()
                Toast.showError('current password is not valid')
            }
            }
            
    
        }    
    return (
        <View style={styles.myAccountContainer}>
             <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerTitle}>Account Details</Text>
                </View>
            </View>
            <View style={{flex:1,justifyContent: 'space-between'}}>
                <View style={{flex:1}}>
                <ScrollView>
                <View style={{flex:1}}>
                        <View style={{marginTop:50}}>
                            
                            <View style={styles.inputSection}>
                                <Text>current password</Text>
                                <ProfileTextInput
                                    autoCorrect={false}
                                    onChangeText={(text)=>setOldPassword(text)}
                                    value={oldPassword}
                                />
                                </View>
                                <View style={styles.inputSection}>
                                <Text>new password</Text>
                                <ProfileTextInput
                                    autoCorrect={false}
                                    onChangeText={(text)=>setNewPassword(text)}
                                    value={newPassword}
                                />
                            </View>
                            <View style={styles.inputSection}>
                            <Text>confirm new password</Text>
                                <ProfileTextInput
                                    autoCorrect={false}
                                    onChangeText={text=>setNewPasswordConfirmation(text)}
                                    value={newPasswordConfirmation}
                                />
                                </View>

                        </View>
    

            </View>
            </ScrollView>
                </View>
                <View style={{flexDirection: 'row',height:60,justifyContent: 'center',alignItems:"center"}}>
                <TouchableOpacity style={styles.submit} onPress={()=>handleChangePassword(oldPassword,newPassword,newPasswordConfirmation)}><Text style={{color:"white"}}>submit</Text></TouchableOpacity>

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
export default ChangePassword;