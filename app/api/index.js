const axios = require('axios');
const url = "http://192.168.1.5:3001/"
axios.defaults.headers["content-type"] = "application/json"


export default http =  {
    get : axios.get,
    post:axios.post,
    url
}