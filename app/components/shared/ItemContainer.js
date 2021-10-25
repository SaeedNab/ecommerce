import React,{useState,useEffect} from "react"
import {View,StyleSheet,TouchableOpacity,FlatList} from "react-native"
import {useSelector} from "react-redux"
import ItemListHeader from "./ItemListHeader";
import Item from "./Item";

const ItemContainer = ({title,hasHeader,navigation,products,type})=>{
    // const [product,setProduct] = useState(...products)
    // console.log(product)
    // const fetchData = (type,data)=>{
    //     switch(type){
    //         case "best":
    //             setProduct(data.sort((a,b)=>a.sell_count>b.sell_count))
    //             break;
    
    //         case "new":
    //             setProduct(data.sort((a,b)=>a.sell_count>b.sell_count))
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // // useEffect(()=>{

    //     fetchData(type,products)
    // })
    return (
        <View style={styles.container}>
            {hasHeader &&<ItemListHeader title={title} more={"مشاهده همه"} onPress={()=>navigation.navigate("Products",{title:"text",id:"id"})} />}
            <FlatList horizontal keyExtractor={(products)=>products._id.toString()} renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate("Details",{item:item})}><Item item={item} image={item.img[0]} text={item.name} id={item._id} price={item.price}/></TouchableOpacity> } data={products} />

        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        marginVertical:5,
        width: '100%',
        flex: 1,
        padding:10,
        backgroundColor:"#fff"
    }


})
export default ItemContainer