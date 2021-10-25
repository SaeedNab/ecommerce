import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {View,Text} from "react-native"
import Home from "./Home"
import Search from "./Search"


const Stack = createNativeStackNavigator()

const HomeStackScreen = ({navigation})=>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"Search"} component={Search} options={{
                title:"Search"
            }}/>


        </Stack.Navigator>
    )
}
export default HomeStackScreen