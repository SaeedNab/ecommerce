// import {AsyncStorage} from "react-native"
export const cartReducer = (state = [],action)=>{
    let index = 0;
    switch(action.type){
        case "ADD_TO_CART":
             index = state.findIndex(element=>element._id == action.payload._id)
            if(index != -1){
                // await AsyncStorage.setItem("cart",[...state])
                state[index] = action.payload
                return [...state]
            }
            return [...state,{...action.payload}]
            // await AsyncStorage.setItem("cart",[...state,{...action.payload,count:1}])
            
            case "PLUS_TO_CART":
                index = state.findIndex(element=>element._id == action.payload._id)
               if(index != -1){
                   state[index].count +=1
                   // await AsyncStorage.setItem("cart",[...state])
                   return [...state]
               }
              
               case "MINUS_FROM_CART":
                index = state.findIndex(element=>element._id == action.payload._id)
            if(index != -1){
                if(state[index].count >1){
                   state[index].count -=1
                   return [...state]  
               }
                // await AsyncStorage.setItem("cart",[...state.filter(element=> element._id != action.payload._id)])   

               
            }
            // await AsyncStorage.setItem("cart",[...state])
            return [...state]
            
        
        case "REMOVE_FROM_CART":
            return [...state.filter(element=> element._id != action.payload._id)]
             
        
            default:
            return state

        
        
        
        }
}