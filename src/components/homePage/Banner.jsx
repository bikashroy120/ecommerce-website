import React from "react";
import Container from "../Container";
import HomeSlyder from "../HomeSlyder";
import { useGetAllBannerQuery } from "../../redux/features/banner/bannerApi";
import Loader from "../Loader";

const Banner = () => {
  const { data, isLoading } = useGetAllBannerQuery("");

  console.log("banner=========", data?.banner);

  return (
    <>
      <Container class1="home-wrapper-1 py-3">
        {isLoading ? (
          <>
          <Loader />
          </>
        ) : (
          <>
            {" "}
            <div className="row">
              <div className="col-12 col-md-8 ">
                <HomeSlyder data={data?.banner} />
              </div>
              <div className="col-12 col-md-4">
                <div className=" h-100 d-flex flex-column gap-3">
                  <div className="sit_banner_main position-relative ">
                    <img
                      src="images/catbanner-03.jpg"
                      className=" rounded-3 h-100 w-100"
                      alt="main banner"
                    />
                    <div className="sid_banner position-absolute">
                      <h4>Best Sake</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div className="sit_banner_main position-relative ">
                    <img
                      src="images/catbanner-01.jpg"
                      className=" rounded-3 h-100 w-100"
                      alt="main banner"
                    />
                    <div className="sid_banner position-absolute">
                      <h4>Best Sake</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Banner;
