import React from 'react'
import {View,Text,StyleSheet} from 'react-native'




const WelcomeScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.customFont}>خوش آمدید</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customFont: {
        fontFamily : "Yekan"
    }


})
export default WelcomeScreen;