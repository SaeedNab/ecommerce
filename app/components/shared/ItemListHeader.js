import React from "react"
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"


const ItemListHeader = ({title,more,onPress})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
          <TouchableOpacity onPress={onPress}>
              
            <Text style={styles.more}>
                {more}
            </Text>
              </TouchableOpacity>  
        </View>
    )
}

const styles = StyleSheet.create({
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
        padding:8,
        backgroundColor:"white",
        color:"#007ef3"
    }


})
export default ItemListHeader