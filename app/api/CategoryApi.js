import http from './index'

export const getAllCategories =async ()=>{
    try{
        const {data: {categories}} = await http.get(`${http.url}user/categories`)
        return categories
    }catch(err){
        console.log(err)
    }

}
