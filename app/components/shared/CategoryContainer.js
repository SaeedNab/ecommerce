import React from "react"
import {View,StyleSheet,Text,FlatList} from "react-native"
import CategoryListHeader from "./CategoryListHeader";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
const CategoryContainer = ({hasHeader,navigation})=>{

    const categories = useSelector(state=>state.categories)
    return (
       <View style={styles.container}>
           {hasHeader && <CategoryListHeader title={"دسته ها"} more={"مشاهده همه"} onPress={()=>(navigation.navigate("ShopPage",{categories}))}/>}
           <FlatList numColumns={2} keyExtractor={(categories)=>categories._id.toString()} renderItem={({item})=><CategoryItem image={item.img} text={item.name} navigation={navigation} id={item._id}/> } data={categories[0]} />
       </View>
   )

}

const styles = StyleSheet.create({
container:{
    width: '100%',
    flex: 1,
    padding:10
}


})
export default CategoryContainer