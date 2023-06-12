import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { creactWishlist, getWishlist} from "../services/product/productSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const dispacth = useDispatch()
  const navigate = useNavigate()
    const {wishlist,wishadd,isSuccess} = useSelector((state)=>state.product)
    const {user} = useSelector((state)=>state.auth)
    const deleteWishlist = (id)=>{
      const data = {
        proId:id
      }
      dispacth(creactWishlist(data))
    }

    useEffect(()=>{
      dispacth(getWishlist())
    },[wishadd,dispacth])
  
    useEffect(()=>{
      if(wishadd && isSuccess){
        toast.success("SuccessFully remove wishlist")
      }
    },[wishadd,isSuccess])

    console.log(wishlist)


    useEffect(()=>{
      if(!user){
        navigate(-1)
      }
    },[user])


  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">


          {
            wishlist?.map((item,i)=>{
              return(
                <div className="col-3" key={i}>
                <div className="wishlist-card position-relative">
                  <img
                    onClick={()=>deleteWishlist(item._id)}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={'http://localhost:5000/uploads/'+item.images[1]}
                      className="img-fluid w-100"
                      alt="watch"
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">
                      {item.title?.slice(0,90)}
                    </h5>
                    <h6 className="price">$ {item.price}</h6>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
