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
import { cartActions } from "../services/card/cardSlice";
import {BsBagPlusFill} from "react-icons/bs"
import {AiTwotoneHeart} from "react-icons/ai"
import { image_url } from "../utils/baseUrl";
const ProductCardHome = (props) => {
  const { grid,product } = props;
  console.log(product);
  let location = useLocation();
  const dispacth = useDispatch()
  const navigate = useNavigate()
  const {wishlist,wishadd,isSuccess} = useSelector((state)=>state.product)
  const {user} = useSelector((state)=>state.auth)


  console.log(user)


  const addWish = (id)=>{

    const data = {
      proId:id
    }

      if(user){
        const stttt = wishlist.find((ite)=>ite._id===id)
        if(stttt){
          // toast.error("already add wishlist !")
        }else{
          dispacth(creactWishlist(data))
        }
      }else{
        navigate("/login")
      }
      toast.success("SuccessFully add wishlist")
  }

  useEffect(()=>{
    dispacth(getWishlist())
  },[wishadd])

  // useEffect(()=>{
  //   if(wishadd && isSuccess){
  //     toast.error("product not abalable")
  //   }
  // },[wishadd,isSuccess])


  const addToCart = (product) =>{
    if(product.quantity===0){
      toast.error("SuccessFully add Cart")
   }else{
    dispacth(cartActions.addToCart({
      id:product._id,
      productname: product.title,
      feature_image: product.images[0],
      price:product.price,
      quentyte:1,
      p_brand:product.brand.title,
      p_category:product.category.title,
      p_avaleable:product.quantity,
  }))};
  toast.success("SuccessFully add Cart")
  }



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

                <div className="wishlist-icon position-absolute" style={{zIndex:"999"}}>
                  <button onClick={()=>addWish(item._id)} className="border-0 bg_heart bg-transparent">
                    <AiTwotoneHeart style={{fontSize:"25px"}}/>
                  </button>
                </div>
                <div className="product-image">
                 <Link to={`/product/${item._id}`}>
                  <img src={item.images[0] ? image_url+'uploads/'+item.images[0] :"images/2748558.png"} className="img-fluid" alt="product image" />
                 </Link>
                </div>
                <div className="product-details">
                  <h6 className="brand">{item.brand.title}</h6>
                  <h5 className="product-title" style={{height:"45px",width:"100%"}}>
                    {item.title.slice(0,30)}...
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
                  <div style={{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                      <p className="price" style={{margin:"0"}}>${item.price}</p>
                      <button onClick={()=>addToCart(item)} className="home_card_button">
                      <BsBagPlusFill style={{fontSize:"20px"}} />
                     </button>
                  </div>
                  
                </div>
                {/* <div className="action-bar position-absolute back_Ground">
                  <div className="d-flex flex-column gap-15">
                  <button onClick={()=>addWish(item._id)} className="border-0 bg-transparent">
                    <img src={wish} alt="wishlist" />
                  </button>
                    <button onClick={()=>navigate(`product/${item._id}`)} className="border-0 bg-transparent">
                      <img src={view} alt="view" />
                    </button>
                    <button onClick={()=>addToCart(item)} className="border-0 bg-transparent">
                      <img src={addcart} alt="addcart" />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            )
          })
        }
    </>
  );
};

export default ProductCardHome;
