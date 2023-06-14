import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { cartActions } from "../services/card/cardSlice";

const Cart = () => {
  const [count,setCount] = useState(1)
  const cartItem = useSelector((state)=>state.cart.itemList)
  const subtotal = useSelector((state)=>state.cart.subtotal);
  const dispacth = useDispatch()
  console.log(cartItem)

  const addCart = (product)=>{


    console.log(product)

    dispacth(cartActions.addToCart({
      id:product.item,
      productname: product.productname,
      feature_image: product.feature_image,
      price:product.price,
      quentyte:1,
      p_brand:product.p_brand,
      p_category:product.p_category,
      p_avaleable:product.p_avaleable,
  }));
  }


  const decereMent = (item)=>{
    dispacth(cartActions.decrementQty(item.item));
  }

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {

              cartItem.map((item,i)=>{
                return(
                  <div key={1} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img src={`http://localhost:5000/uploads/${item.feature_image}`} className="img-fluid" alt="product image" />
                    </div>
                    <div className="w-75">
                      <p>{item.productname}</p>
                      <p>Catagory: {item.p_category}</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">$ {item.amount_item}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div className="button_card">
                          <button onClick={()=> decereMent(item)}>
                            -
                          </button>
                          <div>
                              {item.quantity}
                          </div>
                          <button onClick={()=>addCart(item)}>
                            +
                          </button>
                      </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">$ {item.total_price}</h5>
                  </div>
                </div>
                )
              })

            }
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
