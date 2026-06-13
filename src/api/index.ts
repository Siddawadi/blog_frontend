import axios from "axios";

const instance = axios.create({
    baseURL:"https://blog-backeend.onrender.com/blog",
    withCredentials:true
})
export default instance