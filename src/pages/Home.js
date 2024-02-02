import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  getProductCategory,
} from "../services/product/productSlice";
import ProductCardHome from "../components/ProductCardHome";
import Countdown from "react-countdown";
import HomeSlyder from "../components/HomeSlyder";
import { image_url } from "../utils/baseUrl";
import { cartActions } from "../services/card/cardSlice";
import Loader from "../components/Loader";
import Banner from "../components/homePage/Banner";
// import { services } from "../utils/Data";

const Home = () => {
  // const [grid, setGrid] = useState(3);
  // const { product, caregory } = useSelector((state) => state.product);
  // const [finalProduct, setFinalProduct] = useState([]);
  // const [count, setcount] = useState(15);
  // const dispacth = useDispatch();
  // const navigate = useNavigate();

  // const fachtProduct = () => {
  //   dispacth(getProduct());
  // };

  // const factecCategory = () => {
  //   dispacth(getProductCategory());
  // };

  // console.log(caregory);

  // const gsidid = (item) => {
  //   dispacth(cartActions.setFilter(item));
  //   navigate("/product");
  // };

  // useEffect(() => {
  //   fachtProduct();
  //   factecCategory();
  // }, []);

  // useEffect(() => {
  //   if (count) {
  //     setFinalProduct(product.slice(0, count));
  //   }
  // }, [count, product]);

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="">
          <span className=" bg-orange-500 text-white rounded-md mx-1 px-2 p-1">
            {hours}
          </span>
          :
          <span className="bg-orange-500 text-white rounded-md mx-1 px-2 p-1">
            {minutes}
          </span>
          :
          <span className="bg-orange-500 text-white rounded-md mx-1 px-2 p-1">
            {seconds}
          </span>
        </span>
      );
    }
  };

  // if(product.length === 0){
  //   return <Loader />
  // }

  return (
    <>
          <Banner />
        <>
          {/* <Container class1="home-wrapper-2 py-5">
            <div className="home_product_top">
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">
                  Product Categorie
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="categories flex-wrap align-items-center">
                  {caregory?.map((item, i) => {
                    return (
                      <div
                        key={i}
                        onClick={() => gsidid(item.title)}
                        className="d-flex gap flex-column align-items-center Category_Product"
                      >
                        <img
                          className="category_image"
                          src={`${image_url}uploads/${item.image}`}
                          style={{ width: "100px", height: "100px" }}
                          alt="camera"
                        />
                        <h6>{item.title}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
          <Container class1="featured-wrapper py-2 home-wrapper-2">
            <div className="home_product_top">
              <div className="FalseDale">
                <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">
                  Flash Deals
                </h2>
                <div className="">
                  <span className="text-[]0.7rem md:text-[1rem]">
                    Ending in
                  </span>
                  <Countdown date={Date.now() + 10000000} renderer={renderer} />
                </div>
              </div>
              <div>
                <button>See More</button>
              </div>
            </div>

            <div className="products-list pb-5">
              <div className="home_product">
                <ProductCardHome grid={grid} product={product?.slice(5, 10)} />
              </div>
            </div>
          </Container> */}

          {/* <Container class1="featured-wrapper py-2 home-wrapper-2">
            <div className="home_product_top">
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">
                  Just For You
                </h2>
              </div>
            </div>

            <div className="products-list pb-5">
              <div className="home_product">
                <ProductCardHome grid={grid} product={finalProduct} />
              </div>
              <div className="product_read_more_button">
                {product.length !== finalProduct.length ? (
                  <button onClick={() => setcount((pre) => pre + 15)}>
                    Read More
                  </button>
                ) : null}
              </div>
            </div>
          </Container> */}

          <Container class1="marque-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-02.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </Container>

          <Container class1="blog-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Latest Blogs</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <BlogCard />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <BlogCard />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <BlogCard />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <BlogCard />
              </div>
            </div>
          </Container>
        </>
    </>
  );
};

export default Home;
