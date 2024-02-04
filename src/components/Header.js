import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate,useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import wishlist from "../images/wishlist.svg";
import users from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";
import { image_url } from "../utils/baseUrl";
import { addCategory, addSearch } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useGetAllCategoryQuery } from "../redux/features/banner/bannerApi";
const Header = () => {
  const cartItem = useSelector((state) => state.cart.itemList);
  // const subtotal = useSelector((state) => state.cart.subtotal);
  const {user} = useSelector((state)=>state.auth);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data:category} = useGetAllCategoryQuery("")
  const location = useLocation()

  console.log("location======",location?.pathname)

  const handelSearch = () => {
    if (!search) {
      toast.error("please type anything");
    } else {
      dispatch(addSearch(search));
      navigate("/product");
    }
  };

  const handelCategory = (category)=>{
    dispatch(addCategory(category));
    navigate("/product");
  }

  useEffect(()=>{
    if(location?.pathname !=="/product"){
      dispatch(addCategory(""));
      dispatch(addSearch(""));
      setSearch("")
    }
  },[location?.pathname])

  console.log(user)

  return (
    <>
      <div className="header_main">
        <header className="header-top-strip py-1">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <p className=" mb-0">Free Shipping Over $100 & Free Returns</p>
              </div>
              <div className="col-6">
                <p className="text-end  mb-0">
                  Hotline:
                  <a className="" href="tel:+91 8264954234">
                    +91 8264954234
                  </a>
                </p>
              </div>
            </div>
          </div>
        </header>
        <header className="header-upper py-3 ">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="col-2 col-lg-3 col-xl-2">
                <h2>
                  <Link to={"/"} className="text-white">
                    Bik Corner
                  </Link>
                </h2>
              </div>
              <div className="col-7 col-md-6 col-lg-6 col-xl-7">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Search Product Here..."
                    aria-label="Search Product Here..."
                    aria-describedby="basic-addon2"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    onClick={() => handelSearch()}
                    className="input-group-text px-4"
                    id="basic-addon2"
                  >
                    <BsSearch className="fs-6" />
                  </button>
                </div>
              </div>
              <div className="col-3 col-md-3 ">
                <div className="header-upper-links d-flex align-items-center justify-content-end gap-4">
                  <div>
                    <Link
                      to="/wishlist"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img src={wishlist} alt="wishlist" />
                      {/* <p className="mb-0">
                      Favourite <br /> wishlist
                    </p> */}
                    </Link>
                  </div>

                  {user ? (
                    <div>
                      <Link
                        to="/profile"
                        className="d-flex align-items-center gap-10 text-white"
                      >
                        <img src={!user.image ? user.image : "images/user.jpg"} style={{width:"40px", height:"40px",borderRadius:"50%"}} alt="user" />
                        {/* <p className="mb-0">
                        Log in <br /> My Account
                      </p> */}
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Link
                        to="/login"
                        className="d-flex align-items-center gap-10 text-white"
                      >
                        <img src={users} alt="user" />
                        {/* <p className="mb-0">
                        Log in <br /> My Account
                      </p> */}
                      </Link>
                    </div>
                  )}

                  <div>
                    <Link
                      to="/cart"
                      className="d-flex position-relative align-items-center gap-10 text-white"
                    >
                      <img src={cart} alt="cart" />
                      <div className="d-flex flex-column gap-10 header_cart">
                        <span className="badge bg-white text-dark">
                          {cartItem.length}
                        </span>
                        {/* <p className="mb-0">$ {subtotal}</p> */}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className="header-bottom py-1">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                  <div>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={menu} alt="" />
                        <span className="me-5 d-inline-block">
                          Shop Categories
                        </span>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {category?.slice(0,8).map((item, i) => {
                          return (
                            <li key={i}>
                              <button onClick={()=>handelCategory(item.title)} className="dropdown-item text-white" to="">
                                {item.title}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-15">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/product">Our Store</NavLink>
                      <NavLink to="/blogs">Blogs</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="jfjfjfjjfjfjjf"></div>

      <div className="mobile_nav_top">
        <div className="input-group">
          <input
            type="text"
            className="form-control py-3"
            placeholder="Search Product Here..."
            aria-label="Search Product Here..."
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text px-4" id="basic-addon2">
            <BsSearch className="fs-6" />
          </span>
        </div>
      </div>
      <div className="mobile_nav_button">
        <div className="header-upper-links d-flex align-items-center justify-content-between  gap-4">
          <div>
            <Link to={"/"}>
              <AiOutlineHome
                style={{ color: "#fff", fontSize: "35px", marginTop: "5px" }}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/wishlist"
              className="d-flex align-items-center gap-10 text-white"
            >
              <img src={wishlist} alt="wishlist" />
              {/* <p className="mb-0">
                      Favourite <br /> wishlist
                    </p> */}
            </Link>
          </div>
          {user ? (
            <div>
              <Link
                to="/profile"
                className="d-flex align-items-center gap-10 text-white"
              >
                <img
                  src={
                    user.image
                      ? image_url + "uploads/" + user.image
                      : "images/user.jpg"
                  }
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  alt="user"
                />
                {/* <p className="mb-0">
                        Log in <br /> My Account
                      </p> */}
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="d-flex align-items-center gap-10 text-white"
              >
                <img src={users} alt="user" />
                {/* <p className="mb-0">
                        Log in <br /> My Account
                      </p> */}
              </Link>
            </div>
          )}
          <div>
            <Link
              to="/cart"
              className="d-flex position-relative align-items-center gap-10 text-white"
            >
              <img src={cart} alt="cart" />
              <div className="d-flex flex-column gap-10 header_cart">
                <span className="badge bg-white text-dark">
                  {cartItem.length}
                </span>
                {/* <p className="mb-0">$ {subtotal}</p> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
