import React from 'react'
import {Dimensions, TextInput, View,StyleSheet} from "react-native";

const ProfileTextInput = ({...props})=>{
    return (
        <View style={styles.inputSection}>

            <TextInput
                style={styles.textInput}
                {...props}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputSection:{
        width:Dimensions.get('window').width/1.5,
        height:35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical:10,
        borderRadius:5

    },
    textInput:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor:"#fff",
        height:35,
        width:Dimensions.get('window').width/1.5,
        borderWidth:0.5,
        borderColor:"gray",
        borderRadius:5,

        elevation:2
    },
})
export default ProfileTextInput