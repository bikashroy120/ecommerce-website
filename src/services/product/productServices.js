import axios from "axios";
// import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const getProduct = async()=>{
    const res = await axios.get(`${base_url}/product`)
    return res.data
}


const productServices = {
    getProduct,
    
  };
  
  export default productServices;