import React from "react"
import {View,StyleSheet,Text,FlatList} from "react-native"
import AddressItem from "./AddressItem"
const AddressContainer = ({navigation,addresses})=> {
  


    return (
        <View style={styles.container}>
            
                { <FlatList keyExtractor={(address) => address._id.toString()}
                renderItem={({item,index}) => <AddressItem address={item} firstName={item.firstName} lastName={item.lastName} address={item.address} />} data={addresses}/>
          }
            
           
        </View>
    )
    

    

}

const styles = StyleSheet.create({
container:{
    justifyContent:"space-between",
    alignItems:"center",
    width: '100%',
    flex: 1,
},
price:{
    marginVertical:10
}


})
export default AddressContainer