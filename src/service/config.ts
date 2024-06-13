import axios from "axios"

const api = axios.create({baseURL:'https://6669f9352e964a6dfed7431b.mockapi.io/api/v1'})

api.interceptors.request.use(
    (request)=>{
        return request
    },
    (error)=>{return Promise.reject(error)}
)

api.interceptors.response.use(
    (response) => response, (error) => alert(error)
)

export default api 