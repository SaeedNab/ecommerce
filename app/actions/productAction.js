import {getProducts} from  "../api/ProductApi"

export const getAllProducts = ()=>{
    return async dispatch=>{
        const products = await getProducts()
        await dispatch({type:"INIT_PRODUCTS",payload:products})
    }
}