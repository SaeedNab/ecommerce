import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View ,I18nManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TabNavigator from './app/containers/TabNavigator'

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppLoading from "expo-app-loading"
import {useFonts} from "expo-font"
import DrawerNavigator from "./app/containers/DrawerNavigator"
import DataContext from "./app/context/DataContext";
import Details from "./app/screens/Details";
import ForgotPassword from "./app/screens/ForgotPassword";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register";
import ShopPage from "./app/screens/ShopPage";
import StackContainer from "./app/containers/StackContainer";
import AnimatedSplash from "react-native-animated-splash-screen";

const Stack = createNativeStackNavigator()
export default function App() {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3000)
  })
    I18nManager.forceRTL(true)

  let [fontsLoaded] = useFonts({
    'Yekan': require('./app/assets/fonts/Yekan.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
      <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={require("./app/assets/images/logo.png")}
        backgroundColor={"#262626"}
        logoHeight={150}
        logoWidth={150}
        >

        <NavigationContainer>
          <StackContainer/>
        </NavigationContainer>
        </AnimatedSplash>

    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
