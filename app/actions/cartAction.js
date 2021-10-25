
export const addToCart = (product)=>{
    return async dispatch=>{
        // const categories = await getAllCategories();
        await dispatch({type:"ADD_TO_CART",payload:product});
    }
}
export const removeFromCart = (product)=>{
    return async dispatch=>{
        // const categories = await getAllCategories();
        await dispatch({type:"REMOVE_FROM_CART",payload:product});
    }
}
export const plusToCart = (product)=>{
    return async dispatch=>{
        // const categories = await getAllCategories();
        await dispatch({type:"PLUS_TO_CART",payload:product});
    }
}
export const minusFromCart = (product)=>{
    return async dispatch=>{
        // const categories = await getAllCategories();
        await dispatch({type:"MINUS_FROM_CART",payload:product});
    }
}