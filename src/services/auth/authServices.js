import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const regester = async(userData)=>{
    const responces = await axios.post(`${base_url}/user/regester`,userData)
    return responces.data
}

const login = async(userData)=>{
    const responces = await axios.post(`${base_url}/user/login`,userData)
    return responces.data
}


const authService = {
    login,
    regester
  };
  
  export default authService;