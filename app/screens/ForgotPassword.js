import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TextInput,Button,Dimensions,Pressable} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/form/ErrorMessage";
import CustomTextInput from "../components/form/CustomTextInput";
const validationSchema = Yup.object().shape({
    username:Yup.string().required("username field is required"),
})
const ForgotPassword = ({navigation})=>{
    return (
        <View style={[styles.myAccountContainer,{width:'100%',}]}>
            <View>
            <Image source={require('./../assets/images/logo.png')} style={{width:300,height:100}}/>
            </View>
            <Formik
                initialValues={{username:""}}
                onSubmit={()=>console.log("submited")}
                validationSchema={validationSchema}
            >
                {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                    <>
                        <View style={styles.form}>
                            <View style={styles.inputSection}>

                                <CustomTextInput
                                    placeholder="Enter your username"
                                    autoCorrect={false}
                                    onChangeText={handleChange("username")}
                                    onBlur={()=>setFieldTouched("username")}
                                />
                            </View>
                            <ErrorMessage message={errors.username} visible={touched.username}/>

                            <Pressable style={styles.button} onPress={handleSubmit}>
                                <Text style={{
                                    color:"#fff",
                                    textAlign:"center"
                                }}>Submit</Text>
                            </Pressable>

                        </View>

                    </>
                )}

            </Formik>


        </View>
    )
}
const styles = StyleSheet.create({
    myAccountContainer:{
        width:"100%",
        flex:1,
        justifyContent:"space-around",
        alignItems:"center"
    },

    button:{
        backgroundColor:"#000",
        width:Dimensions.get("window").width/1.5,
        color:"white",
        borderRadius:20,
        padding:10,
        marginHorizontal:20,
        marginVertical:10

    },
    texts:{
        width:Dimensions.get("window").width/2,
        textAlign:"right",
        marginHorizontal:20,
        marginVertical:5
    }
})
export default ForgotPassword