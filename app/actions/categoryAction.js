import {getAllCategories} from  "../api/CategoryApi"

export const getCategories = ()=>{
    return async dispatch=>{
        const categories = await getAllCategories();
        await dispatch({type:"INIT_CATEGORIES",payload:categories});
    }
}