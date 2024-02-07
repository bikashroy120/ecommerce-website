import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BsBagPlusFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import { cartActions } from "../redux/features/card/cardSlice";
import { wishActions } from "../redux/features/wishlist/wishlistSlice";

const ProductCardHome = (props) => {
  const { grid, product } = props;
  console.log(product);
  const dispatch = useDispatch();

  const addWish = (item) => {
    dispatch(wishActions.addToWhishList(item));
    toast.success("SuccessFully add wishlist");
  };

  // useEffect(()=>{
  //   if(wishadd && isSuccess){
  //     toast.error("product not abalable")
  //   }
  // },[wishadd,isSuccess])

  const addToCart = (product) => {
    if (product.quantity === 0) {
      toast.error("SuccessFully add Cart");
    } else {
      dispatch(
        cartActions.addToCart({
          id: product._id,
          productname: product.title,
          feature_image: product.images[0],
          price: product.price,
          quentyte: 1,
          p_brand: product.brand.title,
          p_category: product.category.title,
          p_avaleable: product.quantity,
        })
      );
    }
    toast.success("SuccessFully add Cart");
  };

  return (
    <>
      {product?.map((item, i) => {
        return (
          <div key={i} className={` w-full `} style={{ width: "100%" }}>
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
              <div
                className="wishlist-icon position-absolute"
                style={{ zIndex: "999" }}
              >
                <button
                  onClick={() => addWish(item)}
                  className="border-0 bg_heart bg-transparent"
                >
                  <AiTwotoneHeart style={{ fontSize: "25px" }} />
                </button>
              </div>
              <div className="product-image">
                <Link to={`/product/${item._id}`}>
                  <img
                    src={item.images[0] ? item.images[0] : "images/2748558.png"}
                    className="img-fluid"
                    alt="product"
                  />
                </Link>
              </div>
              <div className="product-details">
                <h6 className="brand">{item.brand}</h6>
                <h5
                  className="product-title"
                  style={{ height: "35px", width: "100%" }}
                >
                  {item.title.slice(0, 30)}...
                </h5>
                <div className=" d-flex align-items-center gap-10">
                  <p
                    style={{ fontSize: "18px", fontWeight: 700 }}
                    className="price"
                  >
                    $ {item?.price}
                  </p>
                  <p className="price line_through">$ {item?.bprice}</p>
                </div>
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item.description.slice(0, 150)}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop:"-20px"
                  }}
                >
                  <ReactStars
                    count={5}
                    size={24}
                    value={Number(5)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <button
                    onClick={() => addToCart(item)}
                    className="home_card_button"
                  >
                    <BsBagPlusFill style={{ fontSize: "20px" }} />
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
        );
      })}
    </>
  );
};

export default ProductCardHome;
