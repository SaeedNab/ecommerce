import React from 'react'
import {useFormikContext} from 'formik'
import {Dimensions, Pressable, StyleSheet, Text} from "react-native";

const CustomSubmitButton = ({color,title})=>{


    const {handleSubmit} = useFormikContext();
    return (
        <Pressable color={color} style={styles.button} onPress={handleSubmit}>
            <Text style={{
                color:color,
                textAlign:"center"
            }}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"#000",
        width:Dimensions.get("window").width/1.5,
        color:"white",
        borderRadius:20,
        padding:10,
        marginHorizontal:20,
        marginVertical:10

    },



})
export default CustomSubmitButton