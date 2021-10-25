export const categoryReducer = (state = [],action)=>{
    switch(action.type){
        case "INIT_CATEGORIES":
            return [...state,action.payload]


        default:
            return state

        
        
        
        }
}