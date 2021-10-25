export const productReducer = (state = [],action)=>{
    switch(action.type){
        case "INIT_PRODUCTS":
            return [...state,action.payload]


        default:
            return state
        }
}