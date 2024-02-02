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
import ProductCategory from "../components/homePage/ProductCategory";
import FlashDeals from "../components/homePage/FlashDeals";
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

  return (
        <>
          <Banner />
          <ProductCategory />
          <FlashDeals />
        <>

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
