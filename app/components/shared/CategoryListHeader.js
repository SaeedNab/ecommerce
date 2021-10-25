import React from "react"
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"


const CategoryListHeader = ({title,more,onPress})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TouchableOpacity onPress={onPress} style={styles.moreButton}>

                <Text style={styles.more}>
                    {more}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    moreButton:{
      borderRadius:5,
      borderWidth:0.3,
      borderColor:"#7e7e7e"
    },
    container:{

        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',

    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        color:"#000"
    },
    more:{
        borderRadius:5,
        padding:8,
        backgroundColor:"white",
        color:"#000"
    }


})
export default CategoryListHeader