
export const addToWishList = (product)=>{
    return async dispatch=>{
        // const categories = await getAllCategories();
        await dispatch({type:"ADD_TO_WISHLIST",payload:product});
    }
}
export const removeFromWishList = (product)=>{
    return async dispatch=>{
        // const categories = await getAllCategories();
        await dispatch({type:"REMOVE_FROM_WISHLIST",payload:product});
    }
}