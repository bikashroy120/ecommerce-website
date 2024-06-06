import React from "react";
import Container from "../Container";
import Countdown from "react-countdown";
import { useGetAllProductQuery } from "../../redux/features/banner/bannerApi";
import ProductCardHome from "../ProductCardHome";
import { useNavigate } from "react-router-dom";

const FlashDeals = () => {
    const  navigate = useNavigate()
    const query = "sold[get]=1"
    const {data} = useGetAllProductQuery("")

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

  return (
    <Container class1="featured-wrapper py-2 home-wrapper-2">
      <div className="home_product_top">
        <div className="FalseDale">
          <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">Flash Deals</h2>
          <div className="">
            <span className="text-[]0.7rem md:text-[1rem]">Ending in</span>
            <Countdown date={Date.now() + 10000000} renderer={renderer} />
          </div>
        </div>
        <div>
          <button onClick={()=>navigate("/product")}>See More</button>
        </div>
      </div>

      <div className="products-list pb-5">
        <div className="home_product">
          <ProductCardHome grid={3} product={data?.products?.slice(0, 5)} />
        </div>
      </div>
    </Container>
  );
};

export default FlashDeals;
