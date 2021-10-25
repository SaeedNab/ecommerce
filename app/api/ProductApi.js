import http from './index'

export const getProducts =async ()=>{
    try{
        const {data:{products}} = await http.get(`${http.url}user/products`)
        return products
    }catch(err){
        console.log(err)
    }

}

export const getProductsByCategory =async (id)=>{
    try{
        const {data:{products}} = await http.get(`${http.url}user/productsByCategory/${id}`)
        console.log(products)
        return products
    }catch(err){
        console.log(err)
    }

}
export const searchProducts =async (name)=>{
    try{
        const {data:{products}} = await http.get(`${http.url}user/search/${name}`)
        return products
    }catch(err){
        console.log(err)
    }

}

