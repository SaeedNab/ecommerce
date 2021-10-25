import React from 'react';
import {useFormikContext} from "formik";
import {Dimensions, StyleSheet, View} from "react-native";
import CustomTextInput from "./CustomTextInput";
import ErrorMessage from "./ErrorMessage";
const CustomFormField = ({name,...props})=>{

    const {handleChange,setFieldTouched,errors,touched} = useFormikContext();
    return (
        <>
                <View style={styles.inputSection}>

                    <CustomTextInput
                        {...props}
                        onChangeText={()=>handleChange(name)}
                        onBlur={()=>setFieldTouched(name)}
                    />
                </View>
                <ErrorMessage message={errors[name]} visible={touched[name]}/>
        </>
    )
}
const styles = StyleSheet.create({
    inputSection:{
        width:Dimensions.get('window').width/1.5,
        height:35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:20,
        backgroundColor: '#fff',
        marginVertical:10,
        borderRadius:20

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
        borderRadius:20,

        elevation:2
    },
})
export default CustomFormField