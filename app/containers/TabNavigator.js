import React,{useState,useEffect,createContext,useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button,View,StyleSheet,Alert, AsyncStorage} from "react-native"
import Home from "../screens/Home"
import Cart from "../screens/Cart"
import WishList from "../screens/WishList"
import MyAccount from "../screens/MyAccount"
import Login from "../screens/Login"
import {MaterialCommunityIcons} from '@expo/vector-icons';
import HomeStackScreen from "../screens/HomeStackScreen";
import Screen from "../components/shared/Screen";
import {useSelector} from "react-redux"
const createThreeButtonAlert = () =>
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
            },
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );

const BottomTabs = createBottomTabNavigator();

const TabNavigator = ({navigation}) => {
    const [authenticated,setAuthenticated] = useState(false)
    const cart = useSelector(state=>state.cart)
    useEffect(()=>{
        async function getToken(){
            const token = await AsyncStorage.getItem("token")
            if (token != null) setAuthenticated(true)

        }
    getToken()
        

    })
return(
           <Screen>
               <BottomTabs.Navigator screenOptions={({route}) => ({
                   tabBarIcon: ({focused, color, size}) => {
                       let iconName;

                       if (route.name === 'HomeStackScreen') {
                           iconName = focused
                               ? 'home-outline'
                               : 'home';
                       } else if (route.name === 'Cart') {
                           iconName = focused ? 'basket-outline' : 'basket';
                       } else if (route.name === 'WishList') {
                           iconName = focused ? 'heart-outline' : 'heart';
                       } else if (route.name === 'MyAccount') {
                           iconName = focused ? 'account-settings-outline' : 'account-settings';
                       }

                       // You can return any component that you like here!
                       return <MaterialCommunityIcons name={iconName} size={size} color={"black"}/>;
                   },
                   tabBarActiveTintColor: 'tomato',
                   tabBarInactiveTintColor: 'gray',
                   headerStyle:{
                       backgroundColor:"tomato"
                   },
                   headerTitleStyle:{
                       color:"white"
                   },headerTintColor:"#fff",


               })}>
                   <BottomTabs.Screen name={"HomeStackScreen"} component={HomeStackScreen} options={{
                       headerShown:false,
                       headerRight: () => (
                           <View style={styles.headerItemsContainer}>
                               <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>{navigation.setOptions({
                                   title : "Search"
                               })
                                   navigation.navigate("Search")

                               }}/>
                               <MaterialCommunityIcons name="heart-outline" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("WishList")}/>
                               <MaterialCommunityIcons name="basket" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Cart")}/>
                           </View>
                       ),
                       title:"Home"
                   }}/>
                   <BottomTabs.Screen name={"Cart"} component={Cart} options={{
                       headerShown:false,
                       tabBarBadge:cart.length,
                   }}/>
                   <BottomTabs.Screen name={"WishList"} component={WishList} options={{
                       headerShown:false,
                       headerRight: () => (
                           <View style={styles.headerItemsContainer}>
                               <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>
                               <MaterialCommunityIcons name="basket" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Cart")}/>
                           </View>
                       ),
                   }}/>

                     <BottomTabs.Screen name={"MyAccount"} initialParams={{success:false}} component={authenticated?MyAccount:Login} options={{headerShown:false}}/>
               </BottomTabs.Navigator>
           </Screen>


    )
}
const styles = StyleSheet.create({
    headerItemsContainer:{
        flexDirection:"row",
        flex:1,
        justifyContent:"flex-end",
        alignItems : "center"
    }
})
export default TabNavigator