import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const getProduct = async()=>{
    const res = await axios.get(`${base_url}/product`)
    return res.data
}

const creactWishlist = async(id)=>{
    const res = await axios.put(`${base_url}/product/wishlist`,{proId:id},config)
    console.log(res)
    return res.data
}

const getWishlist = async()=>{
    const res = await axios.get(`${base_url}/user/wishlist`,config)
    return res.data.wishList
}


const productServices = {
    getProduct,
    creactWishlist,
    getWishlist,
  };
  
  export default productServices;