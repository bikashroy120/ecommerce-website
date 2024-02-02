import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation} from "react-router-dom";
import { useDispatch} from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../redux/features/card/cardSlice";
import {BsBagPlusFill} from "react-icons/bs"
import {AiTwotoneHeart} from "react-icons/ai"

const ProductCard = (props) => {
  const { grid,product } = props;
  console.log(product);
  let location = useLocation();
  const dispacth = useDispatch()



  const addWish = (id)=>{
    // const data = {
    //   proId:id
    // }

    //   if(user){
    //     const stttt = wishlist.find((ite)=>ite._id===id)
    //   }else{
    //     navigate("/login")
    //   }

  }

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


  // useEffect(()=>{
  //   if(wishadd && isSuccess){
  //     toast.success("SuccessFully add wishlist")
  //   }
  // },[wishadd,isSuccess])

  return (
    <>
        {
          product?.map((item,i)=>{
            return(
              <div key={i}
              className={` ${
                location.pathname == "/product" ? `gr-${grid}` : `gr-${grid}`
              } width_100 `}
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
                  <img src={item.images[0] ? item.images[0] :"images/2748558.png"} className="img-fluid" alt="product" />
                 </Link>
                </div>
                <div className="product-details">
                  <h6 className="brand">Havels</h6>
                  <h5 className="product-title">
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
                {/* <div className="action-bar position-absolute">
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
                </div> */}
              </div>
            </div>
            )
          })
        }
    </>
  );
};

export default ProductCard;
