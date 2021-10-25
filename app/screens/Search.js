import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,StatusBar,TextInput,FlatList,TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {searchProducts} from '../api/ProductApi'


const Search = ({navigation})=>{
    const [name,setName] = useState()
    const [products,setProducts] = useState([])
    const [loading,seetLoading] = useState(false)
    const [data,setData] = useState([])
    const [count,setCount] = useState(0)
    
    
    const getData = (name)=>{
        searchProducts(name).then(data=>{
            setProducts(data)
        })

    }
    useEffect(()=>{
        getData(name)
    },[name])
    return (
        <View style={styles.searchContainer}>
            <StatusBar
                animated={true}
                backgroundColor="#d90429"
            />
            <View style={styles.customHeader}>
                <View style={styles.headerRight}>
                    <TextInput
                    placeholder="Search"
                    placeholderTextColor={"white"}
                    onChangeText={text=>setName(text)}
                    value={name}
                    style={{textAlign:"right",color:"white"}}
                    />
                </View>
                <View style={styles.headerLeft}>
                    <MaterialCommunityIcons name="magnify" size={24} color="white" style={{marginHorizontal:8}} onPress={()=>navigation.navigate("Search")}/>

                </View>
            </View>
            <View style={"productsContainer"}>
            {products.length > 0 ? (
                <FlatList style={{width:"100%"}} keyExtractor={(product) => product._id.toString()}
                renderItem={({item}) => <TouchableOpacity onPress={()=>navigation.navigate("Details",{item})} style={{padding:20,width:"100%",borderColor:"#000",borderWidth:1}}><View style={{flexDirection:"column",width:"100%"}}><Text>{item.name}</Text>
                </View>
                </TouchableOpacity>} data={products}/>
            ):<Text style={{color:"red",textAlign:"center",marginVertical:20,fontSize:20}}>not found</Text>}
            
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    searchContainer:{
        width:"100%",
        flex:1,
        justifyContent:"flex-start",
    },
    customHeader:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:60,
        marginTop:15,
        backgroundColor:"#ef233c",
        flexDirection:"row"
    },
    headerRight:{
        marginHorizontal:10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:"100%",
        alignContent:"center"
    },
    headerLeft:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:"100%",
        alignContent:"center"
    },
    headerTitle:{
        color:"#fff",
        fontWeight:"bold"
    },
    productsContainer:{
        width:"100%",
        flex : 1,
        flexDirection:"column",
    }
})
export default Search