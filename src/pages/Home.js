import React from "react";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import Banner from "../components/homePage/Banner";
import ProductCategory from "../components/homePage/ProductCategory";
import FlashDeals from "../components/homePage/FlashDeals";
import HomeProduct from "../components/homePage/HomeProduct";
import { useGetAllBannerQuery } from "../redux/features/banner/bannerApi";

const Home = () => {
  const { data, isLoading } = useGetAllBannerQuery("");


  return (
    <>
      <Banner data={data} isLoading={isLoading}/>
      <ProductCategory />
      <FlashDeals />
      <HomeProduct />
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
  );
};

export default Home;
