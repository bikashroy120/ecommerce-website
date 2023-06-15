import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const creactOrder = async(data)=>{
    const res = await axios.post(`${base_url}/user/add-order`,data,config)
    console.log(res)
    return res.data
}

const singalOrder = async(data)=>{
    const res = await axios.get(`${base_url}/user/order/${data}`,config)
    console.log(res)
    return res.data
}

const profileServices = {
    creactOrder,
    singalOrder
  };
  
  export default profileServices;