import React,{useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
const CollipsibleText = ({header,content})=>{
    const [collapsed,setCollapsed] = useState(true)
    const toggleExpanded = () => {
        //Toggling the state of single Collapsible
        setCollapsed(!collapsed);
      };
    return (<View>
      
        {/* <Separator bordered> */}
        <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.quantity}>
                    <Text>{header}</Text>
                    <View style={{display:'flex',flexDirection:"row"}}>
                        <Entypo name="plus" size={24} color="black" />
                    </View>
                </View>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text style={{ textAlign: 'center' }}>
                {content}
              </Text>
            </View>
          </Collapsible>          
            {/* </Separator> */}
      
      
  </View>)


}
const styles = StyleSheet.create({
    
    quantity:{
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
      },
})
export default CollipsibleText;