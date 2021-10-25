import React from 'react';
import {Text,View,StyleSheet} from 'react-native'



const ErrorMessage = ({message,visible})=>{
    if (!visible || !message) return null
    return (
            <Text style={styles.errorMessage}>
                {
                    message
                }
            </Text>
    )
}

const styles = StyleSheet.create({
    errorMessage : {
        color:"red",
        fontSize:16,
        textAlign:"center"
    }
})
export default ErrorMessage