import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8080/blog",
    withCredentials:true
})
export default instance