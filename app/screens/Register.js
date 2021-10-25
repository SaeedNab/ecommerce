import React,{useState} from 'react'
import {View,Text,StyleSheet,Image,TextInput,Button,Dimensions,Pressable} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import Toast from 'react-native-tiny-toast'
import ErrorMessage from "../components/form/ErrorMessage";
import CustomTextInput from "../components/form/CustomTextInput";
import {registerUser} from './../api/UserApi'
const validationSchema = Yup.object().shape({
    username:Yup.string().required("username field is required"),
    password:Yup.string().required("password field is required"),
    email:Yup.string().required("password field is required").email("email is invalid"),
    passwordConfirmation:Yup.string().required("password confirmation field is required"),
})
const Register = ({navigation})=>{
    const handleUserRegister = async(user)=>{
        try{
            Toast.showLoading("loading...")
            const status = await registerUser(user)
            // functions for registered user
            if (status === 201){
                Toast.hide()
                navigation.navigate('Login',{success : true})
            }else{
                Toast.hide()

            }
        }catch(e){
            console.log(e)
            Toast.hide()
        }

    }
    return (
        <View style={[styles.myAccountContainer,{width:'100%',}]}>
            <View>
            <Image source={require('./../assets/images/logo.png')} style={{width:300,height:100}}/>
            </View>
            <Formik
                initialValues={{username:"",password:"",passwordConfirmation:"",email:""}}
                onSubmit={(user)=>handleUserRegister(user)}
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
                            <View style={styles.inputSection}>

                                <CustomTextInput
                                    placeholder="Enter your email"
                                    autoCorrect={false}
                                    onChangeText={handleChange("email")}
                                    onBlur={()=>setFieldTouched("email")}
                                />
                            </View>
                            <ErrorMessage message={errors.email} visible={touched.email}/>
                            <View style={styles.inputSection}>

                                <CustomTextInput
                                    placeholder="Enter your password"
                                    autoCompleteType="password"
                                    secureTextEntry
                                    onChangeText={handleChange("password")}
                                    onBlur={()=>setFieldTouched("password")}
                                />
                            </View>
                            <ErrorMessage message={errors.password} visible={touched.password}/>
                            <View style={styles.inputSection}>

                                <CustomTextInput
                                    placeholder="Enter your password confirmation"
                                    autoCompleteType="password"
                                    secureTextEntry
                                    onChangeText={handleChange("passwordConfirmation")}
                                    onBlur={()=>setFieldTouched("passwordConfirmation")}
                                />
                            </View>
                            <ErrorMessage message={errors.passwordConfirmation} visible={touched.passwordConfirmation}/>
                            <Pressable style={styles.button} onPress={handleSubmit}>
                                <Text style={{
                                    color:"#fff",
                                    textAlign:"center"
                                }}>Register</Text>
                            </Pressable>

                            <Text style={styles.texts}>Already a member?Signin</Text>
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
export default Register