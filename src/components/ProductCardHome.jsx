import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { creactWishlist, getWishlist, resetState } from "../services/product/productSlice";
import { toast } from "react-toastify";
const ProductCardHome = (props) => {
  const { grid,product } = props;
  console.log(product);
  let location = useLocation();
  const dispacth = useDispatch()
  const navigate = useNavigate()
  const {wishlist,wishadd,isSuccess} = useSelector((state)=>state.product)
  const {user} = useSelector((state)=>state.auth)


  console.log(wishlist)


  const addWish = (id)=>{

    const data = {
      proId:id
    }

      if(user){
        const stttt = wishlist.find((ite)=>ite._id===id)
        if(stttt){
          toast.error("already add wishlist !")
        }else{
          dispacth(creactWishlist(data))
        }
      }else{
        navigate("/login")
      }
  }

  useEffect(()=>{
    dispacth(getWishlist())
  },[wishadd])

  useEffect(()=>{
    if(wishadd && isSuccess){
      toast.success("SuccessFully add wishlist")
    }
  },[wishadd,isSuccess])

  return (
    <>
        {
          product?.map((item,i)=>{
            return(
              <div key={i}
              className={` w-full ` }
              style={{width:"100%"}}
            >
              <div
                // to={`${
                //   location.pathname == "/"
                //     ? "/product/:id"
                //     : location.pathname == "/product/:id"
                //     ? "/product/:id"
                //     : ":id"
                // }`}
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button onClick={()=>addWish(item._id)} className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img src={'http://localhost:5000/uploads/'+item.images[0]} className="img-fluid" alt="product image" />
                  <img src={'http://localhost:5000/uploads/'+item.images[0]} className="img-fluid" alt="product image" />
                </div>
                <div className="product-details">
                  <h6 className="brand">Havels</h6>
                  <h5 className="product-title" style={{height:"45px",width:"100%"}}>
                    {item.title.slice(0,50)}
                  </h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={Number(item.totalrating)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                    
                      {item.description.slice(0,150)}
                  </p>
                  <p className="price">${item.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                      <img src={prodcompare} alt="compare" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={view} alt="view" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={addcart} alt="addcart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
    </>
  );
};

export default ProductCardHome;
