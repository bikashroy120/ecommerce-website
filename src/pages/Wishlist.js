import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { creactWishlist, getWishlist} from "../services/product/productSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { image_url } from "../utils/baseUrl";

const Wishlist = () => {
  const dispacth = useDispatch()
  const wishList = useSelector((state)=>state.cart.showCart)
    const deleteWishlist = (id)=>{
      const data = {
        proId:id
      }
      dispacth(creactWishlist(data))
      toast.success("SuccessFully remove wishlist")
    }


    console.log("=======hhhh=======",wishList)


    // useEffect(()=>{
    //   if(wishadd && isSuccess){
    //     toast.success("SuccessFully remove wishlist")
    //   }
    // },[wishadd,isSuccess])






  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">

{/* 
          {
            wishList?.map((item,i)=>{
              return(
                <div className="col-lg-3 col-md-4 col-6" key={i}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={()=>deleteWishlist(item._id)}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={item.images[0] ? item.images[0] :"images/2748558.png"}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">
                      {item.title?.slice(0,40)}
                    </h5>
                    <h6 className="price">$ {item.price}</h6>
                  </div>
                </div>
              </div>
              )
            })
          } */}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
