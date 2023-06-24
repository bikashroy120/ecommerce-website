import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const getProduct = async()=>{
    const res = await axios.get(`${base_url}/product`)
    return res.data
}


const getSingalProduct = async(id)=>{
    const res = await axios.get(`${base_url}/product/${id}`)
    return res.data
}

const creactWishlist = async(data)=>{
    const res = await axios.put(`${base_url}/product/wishlist`,data,config)
    console.log(res)
    return res.data
}

const getWishlist = async()=>{
    const res = await axios.get(`${base_url}/user/wishlist`,config)
    return res.data.wishlist
}

const getCategory = async()=>{
    const res = await axios.get(`${base_url}/product-category`,config)
    return res.data
}


const productServices = {
    getProduct,
    getSingalProduct,
    creactWishlist,
    getWishlist,
    getCategory,
  };
  
  export default productServices;