import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCreditCard, BsCashCoin } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../services/card/cardSlice";
import { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import PageProted from "../utils/PageProted";
import { useCreateOrderMutation, useGetShippingCostQuery } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";

let schema = yup.object().shape({
  FirstName: yup.string().required("First Name is Required"),
  LastName: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email is Required"),
  phone: yup.string().required("Phone is Required"),
  address: yup.string().required("Address is Required"),
  city: yup.string().required("city is Required"),
  zip: yup.string().required("ZIP is Required"),
  shipping: yup.string().required("shipping is Required"),
  method: yup.string().required("Method is Required"),
});

const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const { user } = useSelector((state) => state.auth);
  const [shippingCost,setShippingCost]=useState({})
  const [value,setValue]=useState(0)

  const [createOrder, { isLoading, data, isSuccess, error }] =
    useCreateOrderMutation();

  const {data:ship,isSuccess:shipSuccess} = useGetShippingCostQuery("")


  console.log("shiping",shippingCost)

 
  useEffect(()=>{
    if(ship){
      setShippingCost(ship[0])
    }
  },[shipSuccess,ship])

  console.log(cartItem)

  const [dId, setDID] = useState(1);
  const [cId, setCID] = useState(1);
  const [total, setTotle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      const message = "Order create success success";
      toast.success(message);
      navigate(`/order/${data?._id}`);
    }
    if (error) {
      toast.error("Order failed ! please try again");
    }
  }, [isSuccess, error, data]);

  const dalevary = [
    {
      id: 1,
      title: "In Dhaka",
      sub: `Delivery Cost :$ ${shippingCost?.inDhaka}`,
    },
    {
      id: 2,
      title: "Out Of Dhaka",
      sub: `Delivery Cost :$ ${shippingCost?.outDhaka}`,
    },
  ];

  const prement = [
    {
      id: 1,
      title: "Cash On Delivery",
      icon: <BsCashCoin style={{ fontSize: "30px" }} />,
    },
    {
      id: 2,
      title: "Credit Card",
      icon: <BsCreditCard style={{ fontSize: "30px" }} />,
    },
  ];
  const dispacth = useDispatch();
  const addCart = (product) => {
    dispacth(
      cartActions.addToCart({
        id: product.item,
        productname: product.productname,
        feature_image: product.feature_image,
        price: product.amount_item,
        quentyte: 1,
        p_brand: product.p_brand,
        p_category: product.p_category,
        p_avaleable: product.p_avaleable,
      })
    );
  };

  const decereMent = (item) => {
    dispacth(cartActions.decrementQty(item.item));
  };

  useEffect(() => {
    if (!dId) {
      setTotle(subtotal);
    }
    if (dId === 1) {
      setTotle(subtotal + Number(shippingCost.inDhaka));
      setValue(shippingCost?.inDhaka)
    }
    if (dId === 2) {
      setTotle(subtotal + Number(shippingCost.outDhaka));
      setValue(shippingCost?.outDhaka)
    }
  }, [dId, subtotal,shippingCost]);

  useEffect(() => {
    formik.values.shipping = dId === 1 ? "FedEx" : "UPS";
    formik.values.shippingCost = dId === 1 ? Number(shippingCost.inDhaka) :Number(shippingCost.outDhaka);
    formik.values.method = cId === 1 ? "Cash" : "Card";
    formik.values.totle = total;
    formik.values.products = cartItem;
  }, [dId, cId, total, cartItem]);

  useEffect(() => {
    formik.values.FirstName = user?.fastname;
    formik.values.email = user?.email;
    formik.values.phone = user?.mobile;
    formik.values.LastName = user?.lastname;
  }, [user]);

  // const CreactOrder = async(data)=>{
  //   const res = await axios.post(`${base_url}/user/add-order`,data,config)
  //   console.log(res)
  // }

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      zip: "",
      shipping: "",
      method: "",
      totle: "",
      discount: "00",
      products: [],
      shippingCost:0,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await createOrder(values);
      console.log(values);
    },
  });

  return (
    <>
      <PageProted>
        <div className="container_margin_top">
          <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="checkout-left-data">
                    <div className="">
                      <h4 className="mb-3">01. Personal Details</h4>
                      <div className="Chakeout_box py-3">
                        <div className=" checkout_inputbox">
                          <label style={{ marginLeft: "10px" }}>
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="Jone"
                            className="form-control"
                            name="FirstName"
                            onChange={formik.handleChange("FirstName")}
                            onBlur={formik.handleBlur("FirstName")}
                            value={formik.values.FirstName}
                          />
                          <div
                            className="error"
                            style={{ height: "5px", marginLeft: "5px" }}
                          >
                            {formik.touched.FirstName &&
                              formik.errors.FirstName}
                          </div>
                        </div>
                        <div className="checkout_inputbox">
                          <label style={{ marginLeft: "10px" }}>
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="Deo"
                            className="form-control"
                            name="LastName"
                            onChange={formik.handleChange("LastName")}
                            onBlur={formik.handleBlur("LastName")}
                            value={formik.values.LastName}
                          />
                          <div
                            className="error"
                            style={{ height: "5px", marginLeft: "5px" }}
                          >
                            {formik.touched.LastName && formik.errors.LastName}
                          </div>
                        </div>
                      </div>

                      <div className="Chakeout_box">
                        <div className=" checkout_inputbox">
                          <label style={{ marginLeft: "10px" }}>
                            Email address
                          </label>
                          <input
                            type="text"
                            placeholder="exmpol@gmail.com"
                            className="form-control"
                            name="email"
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                            value={formik.values.email}
                          />
                          <div
                            className="error"
                            style={{ height: "5px", marginLeft: "5px" }}
                          >
                            {formik.touched.email && formik.errors.email}
                          </div>
                        </div>
                        <div className="checkout_inputbox">
                          <label style={{ marginLeft: "10px" }}>
                            Phone Number
                          </label>
                          <input
                            type="text"
                            placeholder="0177889545"
                            className="form-control"
                            name="phone"
                            onChange={formik.handleChange("phone")}
                            onBlur={formik.handleBlur("phone")}
                            value={formik.values.phone}
                          />
                          <div
                            className="error"
                            style={{ height: "5px", marginLeft: "5px" }}
                          >
                            {formik.touched.phone && formik.errors.phone}
                          </div>
                        </div>
                      </div>

                      <h4 className="pt-4">02. Shipping Details</h4>
                      <div className="flex-grow-1 checkout_inputbox mb-4">
                        <label style={{ marginLeft: "10px" }}>
                          Street address
                        </label>
                        <input
                          type="text"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                          className="form-control"
                          name="address"
                          onChange={formik.handleChange("address")}
                          onBlur={formik.handleBlur("address")}
                          value={formik.values.address}
                        />
                        <div
                          className="error"
                          style={{ height: "5px", marginLeft: "5px" }}
                        >
                          {formik.touched.address && formik.errors.address}
                        </div>
                      </div>

                      <div className="Chakeout_box py-3">
                        <div className=" checkout_inputbox">
                          <label style={{ marginLeft: "10px" }}>City</label>
                          <input
                            type="text"
                            placeholder="Dhaka"
                            className="form-control"
                            name="city"
                            onChange={formik.handleChange("city")}
                            onBlur={formik.handleBlur("city")}
                            value={formik.values.city}
                          />
                          <div
                            className="error"
                            style={{ height: "5px", marginLeft: "5px" }}
                          >
                            {formik.touched.city && formik.errors.city}
                          </div>
                        </div>
                        {/* <div className="checkout_inputbox">
                        <label style={{ marginLeft: "10px" }}>Country</label>
                        <input
                          type="text"
                          placeholder="Dhaka"
                          className="form-control"
                          name="country"
                          onChange={formik.handleChange("country")}
                          onBlur={formik.handleBlur("country")}
                          value={formik.values.country}
                        />
                        <div
                          className="error"
                          style={{ height: "5px", marginLeft: "5px" }}
                        >
                          {formik.touched.country && formik.errors.country}
                        </div>
                      </div> */}
                        <div className="checkout_inputbox">
                          <label style={{ marginLeft: "10px" }}>
                            ZIP / Postal
                          </label>
                          <input
                            type="text"
                            placeholder="12548"
                            className="form-control"
                            name="zip"
                            onChange={formik.handleChange("zip")}
                            onBlur={formik.handleBlur("zip")}
                            value={formik.values.zip}
                          />
                          <div
                            className="error"
                            style={{ height: "5px", marginLeft: "5px" }}
                          >
                            {formik.touched.zip && formik.errors.zip}
                          </div>
                        </div>
                      </div>
                      <label style={{ marginLeft: "10px" }}>
                        Shipping Cost
                      </label>
                      <div className="Chakeout_box2">
                        {dalevary.map((item, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() => setDID(item.id)}
                              className="delevery_item"
                            >
                              <div>
                                <CiDeliveryTruck style={{ fontSize: "40px" }} />
                                <div>
                                  <h6 style={{ margin: "0" }}>{item.title}</h6>
                                  <p style={{ margin: "0" }}>{item.sub}</p>
                                </div>
                              </div>
                              <div
                                className={`serCale ${
                                  dId === item.id ? "bg_green" : ""
                                }`}
                              ></div>
                            </div>
                          );
                        })}
                      </div>
                      <div
                        className="error"
                        style={{
                          height: "5px",
                          marginLeft: "5px",
                          marginTop: "-20px",
                        }}
                      >
                        {formik.errors.shipping}
                      </div>

                      {/* <h4 className="mt-5">03. Payment Method</h4>
                      <div className="Chakeout_box">
                        {prement.map((item, i) => {
                          return (
                            <div
                              key={i}
                              onClick={() => setCID(item.id)}
                              className="delevery_item"
                              style={{ padding: "15px" }}
                            >
                              <div>
                                {item.icon}
                                <div>
                                  <h6 style={{ margin: "0" }}>{item.title}</h6>
                                </div>
                              </div>
                              <div
                                className={`serCale ${
                                  cId === item.id ? "bg_green" : ""
                                }`}
                              ></div>
                            </div>
                          );
                        })}
                      </div> */}
                      <div
                        className="error"
                        style={{
                          height: "5px",
                          marginLeft: "5px",
                          marginTop: "-20px",
                          marginBottom: "40px",
                        }}
                      >
                        {formik.errors.method}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-12 ">
                  <div className="Shopping_summary">
                    <h4>Order Summary</h4>
                    <div className="Cart_product_show">
                      {cartItem.map((item, i) => {
                        return (
                          <div key={i} className="border-bottom py-2 px-2">
                            <div className="d-flex gap-10 align-align-items-center">
                              <div className="w-100 d-flex align-items-center gap-10">
                                <div className="w-25 position-relative">
                                  <img
                                    className="img-fluid"
                                    src={`${item.feature_image}`}
                                    alt="product"
                                  />
                                </div>
                                <div>
                                  <p>{item.productname.slice(0, 40)}</p>
                                  <div className=" d-flex align-items-center gap-10">
                                    <h6 className="price" style={{marginBottom:"-4px"}}>
                                      $ {item.amount_item}
                                    </h6>
                                    <div className="button_card">
                                      <button
                                        type="button"
                                        onClick={() => decereMent(item)}
                                        style={{ padding: "2px 10px" }}
                                      >
                                        -
                                      </button>
                                      <div style={{ padding: "2px 10px" }}>
                                        {item.quantity}
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => addCart(item)}
                                        style={{ padding: "2px 10px" }}
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="flex-grow-1">
                                <div className="button_card">
                                  <button
                                    type="button"
                                    onClick={() => decereMent(item)}
                                    style={{ padding: "2px 10px" }}
                                  >
                                    -
                                  </button>
                                  <div style={{ padding: "2px 10px" }}>
                                    {item.quantity}
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => addCart(item)}
                                    style={{ padding: "2px 10px" }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className="Chakeout_box"
                      style={{ marginBottom: "0", marginTop: "20px" }}
                    >
                      <div className=" checkout_inputbox">
                        <input
                          type="text"
                          placeholder="input your coupon code"
                          className="form-control"
                        />
                      </div>
                      <button type="button" className="Chakeout_box_button">Apply</button>
                    </div>

                    <div className="border-bottom py-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="total">Subtotal</h6>
                        <h6 className="total-price">$ {subtotal}</h6>
                      </div>
                      <div className="d-flex justify-content-between mt-2 align-items-center">
                        <h6 className="mb-0 total">Shipping Cost</h6>
                        <h6 className="mb-0 total-price">
                        ${value}
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between mt-3 align-items-center">
                        <h6 className="mb-0 total">Discount</h6>
                        <h6
                          className="mb-0 total-price"
                          style={{ color: "red" }}
                        >
                          $ 00
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bootom py-4">
                      <h3 style={{ fontSize: "18px" }} className="total">
                        Total
                      </h3>
                      <h5 className="total-price">$ {total}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/" className="text-dark">
                    <BiArrowBack className="me-2" />
                    countnew shoping
                  </Link>
                  <button type="submit" className="button">
                    {isLoading ? "Loading..." : " Order"}
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </div>
      </PageProted>
    </>
  );
};

export default Checkout;
