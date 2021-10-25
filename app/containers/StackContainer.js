import React, {useState,useEffect} from 'react';
import { StyleSheet, Alert,BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import DataContext from "./../context/DataContext"
import DrawerNavigator from './../containers/DrawerNavigator'
import NetInfo from '@react-native-community/netinfo'
import ShopPage from "../screens/ShopPage";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import Register from "../screens/Register";
import Details from "../screens/Details";
import Products from "../screens/Products";
import Language from "../screens/Language";
import AccountDetails from "../screens/AccountDetails";
import ShippingAddress from "../screens/ShippingAddress";
import ChangePassword from "../screens/ChangePassword";
import Checkout from "../screens/Checkout";
import Addresses from "../screens/Addresses";
import Orders from "../screens/Orders";
import {Provider} from "react-redux"
import {store} from "../store"
const Stack = createNativeStackNavigator()

const StackContainer = () =>{
    return (
        <Provider store={store}>
          <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name={"DrawerNavigator"} component={DrawerNavigator}/>
            <Stack.Screen name={"Details"} component={Details}/>
            <Stack.Screen name={"Checkout"} component={Checkout}/>
            <Stack.Screen name={"Products"} component={Products}/>
            <Stack.Screen name={"Register"} component={Register}/>
            <Stack.Screen name={"ShopPage"} component={ShopPage}/>
            <Stack.Screen name={"Login"} component={Login}/>
            <Stack.Screen name={"Language"} component={Language}/>
            <Stack.Screen name={"AccountDetails"} component={AccountDetails}/>
            <Stack.Screen name={"ChangePassword"} component={ChangePassword}/>
            <Stack.Screen name={"ShippingAddress"} component={ShippingAddress}/>
            <Stack.Screen name={"Addresses"} component={Addresses}/>
            <Stack.Screen name={"Orders"} component={Orders}/>
            <Stack.Screen name={"ForgotPassword"} component={ForgotPassword}/>
          </Stack.Navigator>
        </Provider>
    );


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default StackContainer