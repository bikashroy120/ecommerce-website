import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import {CiDeliveryTruck} from "react-icons/ci"
import {BsCreditCard,BsCashCoin} from "react-icons/bs"
import { useState } from "react";

const Checkout = () => {

  const [dId,setDID] = useState()
  const [cId,setCID] = useState()
  const dalevary = [
    {
      id:1,
      title:"FedEx",
      sub:"Delivery: Today Cost :$60.00"
    },
    {
      id:2,
      title:"UPS",
      sub:"Delivery: 7 Days Cost :$20.00"
    }
  ]

  const prement = [
    {
      id:1,
      title:"Cash On Delivery",
      icon:<BsCashCoin style={{fontSize:"30px"}}/>
      
    },
    {
      id:2,
      title:"Credit Card",
      icon:<BsCreditCard style={{fontSize:"30px"}}/>
    }
  ]



  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              {/* <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Navdeep Dahiya (monud0232@gmail.com)
              </p> */}
              <form
                action=""
                className=""
              >
                {/* <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div> */}
                  <h4 className="mb-3">01. Personal Details</h4>
                  <div className="Chakeout_box">
                      <div className=" checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>First Name</label>
                      <input
                        type="text"
                        placeholder="Jone"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Deo"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="Chakeout_box">
                    <div className=" checkout_inputbox">
                    <label style={{marginLeft:"10px"}}>Email address</label>
                    <input
                      type="text"
                      placeholder="exmpol@gmail.com"
                      className="form-control"
                    />
                  </div>
                  <div className="checkout_inputbox">
                    <label style={{marginLeft:"10px"}}>Phone Number</label>
                    <input
                      type="text"
                      placeholder="0177889545"
                      className="form-control"
                    />
                  </div>
                  </div>

                <h4 className="pt-4">02. Shipping Details</h4>
                <div className="flex-grow-1 checkout_inputbox mb-4">
                  <label style={{marginLeft:"10px"}}>Street address</label>
                  <input
                    type="text"
                    placeholder="123 Boulevard Rd, Beverley Hills"
                    className="form-control"
                  />
                </div>

                <div className="Chakeout_box">
                      <div className=" checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>City</label>
                      <input
                        type="text"
                        placeholder="Dhaka"
                        className="form-control"
                      />
                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>Country</label>
                      <input
                        type="text"
                        placeholder="Dhaka"
                        className="form-control"
                      />
                    </div>
                    <div className="checkout_inputbox">
                      <label style={{marginLeft:"10px"}}>ZIP / Postal</label>
                      <input
                        type="text"
                        placeholder="12548"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <label style={{marginLeft:"10px"}}>Shipping Cost</label>
                  <div className="Chakeout_box">
                      {
                        dalevary.map((item,i)=>{
                          return(
                            <div key={i} onClick={()=>setDID(item.id)} className="delevery_item">
                                <div>
                                  <CiDeliveryTruck style={{fontSize:"40px"}}/>
                                  <div>
                                      <h6 style={{margin:"0"}}>{item.title}</h6>
                                      <p style={{margin:"0"}}>{item.sub}</p>
                                  </div>
                                </div>
                                <div className={`serCale ${dId === item.id ? "bg_green" : ""}`}></div>
                            </div>
                          )
                        })
                      }

                  </div>

                  <h4 className="mt-5">03. Payment Method</h4>
                  <div className="Chakeout_box">
                      {
                        prement.map((item,i)=>{
                          return(
                            <div key={i} onClick={()=>setCID(item.id)} className="delevery_item" style={{padding:"15px"}}>
                                <div>
                                  {item.icon}
                                  <div>
                                      <h6 style={{margin:"0"}}>{item.title}</h6>
                                  </div>
                                </div>
                                <div className={`serCale ${cId === item.id ? "bg_green" : ""}`}></div>
                            </div>
                          )
                        })
                      }

                  </div>


                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <button type="submit" className="button">
                      Continue to Shipping
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

                      

          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">gfdhgf</h5>
                    <p className="total-price">s / #agfgfd</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 10000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
