import React, {useEffect} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,Dimensions,Pressable,AsyncStorage} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import Toast from 'react-native-tiny-toast'
import ErrorMessage from "../components/form/ErrorMessage";
import CustomTextInput from "../components/form/CustomTextInput";
import {loginUser} from './../api/UserApi'
const validationSchema = Yup.object().shape({
    username:Yup.string().required("username field is required"),
    password:Yup.string().required("password field is required")
})
const Login = ({navigation,route})=>{
    
    useEffect(()=>{

        const {success} = route.params.success
        if (success){
            Toast.showSuccess("شما با موفقیت ثبت نام شدید")
            setTimeout(()=>{
                Toast.hide()
            },3000)
        }
    },[])
    const handleUserLogin = async (user)=>{
        try{
            Toast.showLoading('loading...')
            const {data,status} = await loginUser(user)
            if (status === 202){
                Toast.hide()
                try{

                    await AsyncStorage.setItem("token",data.token)
                }catch(e){
                    console.log(e)
                }
                navigation.navigate("MyAccount",{success:false})
            }else{
                Toast.hide()

            }    
        }catch(e){
            Toast.hide()

            console.log(e)
        }
        
    }
    return (
        <View style={[styles.myAccountContainer,{width:'100%',}]}>
            <View>
            <Image source={require('./../assets/images/logo.png')} style={{width:300,height:100}}/>
            </View>
            <Formik
                initialValues={{username:"",password:""}}
                onSubmit={(user)=>handleUserLogin(user)}
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
                                    placeholder="Enter your password"
                                    autoCompleteType="password"
                                    secureTextEntry
                                    onChangeText={handleChange("password")}
                                    onBlur={()=>setFieldTouched("password")}
                                />
                            </View>
                            <ErrorMessage message={errors.password} visible={touched.password}/>
                            <Pressable style={styles.button} onPress={handleSubmit}>
                                <Text style={{
                                    color:"#fff",
                                    textAlign:"center"
                                }}>Login</Text>
                            </Pressable>

                            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>

                            <Text style={styles.texts}>No account? Create one</Text>
                            </TouchableOpacity>
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
export default Login