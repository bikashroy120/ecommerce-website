import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const creactOrder = async(data)=>{
    const res = await axios.post(`${base_url}/user/add-order`,data,config)
    return res.data
}

const singalOrder = async(data)=>{
    const res = await axios.get(`${base_url}/user/order/${data}`,config)
    return res.data
}

const dashbord = async(data)=>{
    const res = await axios.get(`${base_url}/user/user-order`,config)
    return res.data
}

const profileServices = {
    creactOrder,
    singalOrder,
    dashbord
  };
  
  export default profileServices;