import http from './index'

export const registerUser = async (user)=>{
    try{
        const {status} = await http.post(`${http.url}user/register`,JSON.stringify(user))
        return status
    }catch(err){
        console.log(err)

    }


}
export const loginUser = async (user)=>{
    try{
        const response = await http.post(`${http.url}user/login`,JSON.stringify(user))
        return response
    }catch(err){
        console.log(err)

    }
}
export const addAddress = async (informations,user)=>{
    try{
        const response = await http.post(`${http.url}user/addAddress/${user}`,JSON.stringify(informations))
        return response
    }catch(err){
        console.log(err)
    }
}
    export const updateProfile = async (informations,user)=>{
        try{
            const response = await http.post(`${http.url}user/updateProfile/${user}`,JSON.stringify(informations))
            return response
        }catch(err){
            console.log(err)
    
        }
}
    export const changePassword = async (informations,user)=>{
    try{
        const response = await http.post(`${http.url}user/changePassword/${user}`,JSON.stringify(informations))
        return response
    }catch(err){
        console.log(err)

    }

    }
    export const getAddresses = async (user)=>{
        try{
            const {data:{addresses}} = await http.get(`${http.url}user/addresses/${user}`)
            console.log(addresses)
            return addresses
        }catch(err){
            console.log(err)
    
        }
    
        }