import React from "react";
import Container from "../Container";
import { useGetAllCategoryQuery } from "../../redux/features/banner/bannerApi";

const ProductCategory = () => {
  const { data, isLoading } = useGetAllCategoryQuery("");

  console.log(data);

  const loading = false;

  return (
    <Container class1="home-wrapper-2 py-5">
      <div className="home_product_top">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">
            Product Category
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {loading ? (
            <></>
          ) : (
            <>
              <div className="categories flex-wrap align-items-center">
                {data?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      // onClick={() => gsidid(item.title)}
                      className="d-flex gap-2 flex-column align-items-center Category_Product"
                    >
                      <img
                        className="category_image"
                        src={`${item.image}`}
                        style={{ width: "120px", height: "100px" }}
                        alt="camera"
                      />
                      <h6>{item.title}</h6>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductCategory;
