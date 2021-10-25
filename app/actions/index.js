

export const userAction = (user)=>{
    return async dispatch=>{
        await dispatch({type:"USER",payload:user})
    }
}