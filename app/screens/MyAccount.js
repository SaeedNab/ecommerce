import React, {useState,useEffect} from 'react'
import Screen from "../components/shared/Screen"
import {StyleSheet, Text, TouchableOpacity, View,Image,AsyncStorage,Alert,StatusBar} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Seprator from "../components/shared/Seprator"
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const MyAccount = ({navigation})=>{
    
    const handleLogout = async ()=>{
        await AsyncStorage.removeItem("token")
        navigation.navigate("Login")
    }
    const logoutAlert = () =>
    Alert.alert(
      "logout confirmation",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleLogout() }
      ]
    );
    return (
      <Screen>
          <View style={styles.informations}>
          <StatusBar
                animated={true}
                backgroundColor="#d90429"
                 />
            <Image style={styles.avatar} source={require('../assets/images/default-avatar.jpg')} width={50} height={50} resizeMode={"contain"}/>
            <Text>SAEED137799</Text>
            <Text>saeed137799@gmail.com</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Orders")}>
        <View style={styles.quantity}>
                    <Text>orders</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft: 10}}>
                    <Feather name="list" size={24} color="black" />
                    </View>
                </View>
        </TouchableOpacity>
        <Seprator/>
        <TouchableOpacity onPress={()=>navigation.navigate("Addresses")}>
        <View style={styles.quantity}>
                    <Text>Shipping Address</Text> 
                    <View style={{display:'flex',flexDirection:"row",paddingLeft: 10}}>
                    <FontAwesome5 name="shipping-fast" size={24} color="black" />                    
                    </View>
                </View> 
        </TouchableOpacity>
        <Seprator/>
        <TouchableOpacity onPress={()=>navigation.navigate("AccountDetails")}>
        <View style={styles.quantity}>
                    <Text>Account Details</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft: 10}}>
                    <MaterialIcons name="settings" size={24} color="black" />                    
                    </View>
                </View>
        </TouchableOpacity>
        <Seprator/>

        <Seprator/>
        <TouchableOpacity onPress={()=>navigation.navigate("ChangePassword")}>
        <View style={styles.quantity}>
                    <Text>Change password</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft: 10}}>
                    <MaterialIcons name="settings" size={24} color="black" />                    
                    </View>
                </View>
        </TouchableOpacity>
        <Seprator/>
        <TouchableOpacity onPress={()=>navigation.navigate("Language")}>
        <View style={styles.quantity}>
                    <Text>Change Language</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft:10}}>
                    <MaterialIcons name="language" size={24} color="black" />                    
                    </View>
                </View>
        </TouchableOpacity>
        <Seprator/>
        <TouchableOpacity onPress={logoutAlert}>
        <View style={styles.quantity}>
                    <Text>Logout</Text>
                    <View style={{display:'flex',flexDirection:"row",paddingLeft:10}}>
                    <MaterialIcons name="logout" size={24} color="black" />       
                     </View>
                </View>
        </TouchableOpacity>
        <Seprator/>
        <Seprator/>
      </Screen>
    )
}
const styles = StyleSheet.create({
   informations:{
       width:"100%",
       height:200,
       flexDirection:"column",
       justifyContent:"center",
       alignItems: "center",
       backgroundColor:"#ef233c"
   },
   avatar:{
       width:70,
       height:70,
       marginVertical:10
   },
   quantity:{
    marginVertical:10,
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"flex-end",
    padding: 10
},
})
export default MyAccount