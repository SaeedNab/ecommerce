export const wishListReducer = (state = [],action)=>{
    let index = 0
    switch(action.type){
        case "ADD_TO_WISHLIST":
            index = state.findIndex(element=>element._id == action.payload._id)
            if(index == -1){

                return [...state,action.payload]
            }
            return [...state]
        case "REMOVE_FROM_WISHLIST":
         index = state.findIndex(element=>element._id == action.payload._id)
            if(index != -1){

                return [...state.filter(element=> element._id != action.payload._id)]
            }
            return [...state]
        default:
            return state

        
        
        
        }
}