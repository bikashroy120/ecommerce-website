import React from "react";
import Container from "../Container";
import { useGetAllCategoryQuery } from "../../redux/features/banner/bannerApi";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const ProductCategory = () => {
  const { data } = useGetAllCategoryQuery("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelCategory = (category)=>{
    dispatch(addCategory(category));
    navigate("/product");
  }

  const loading = false;

  return (
    <Container class1="home-wrapper-2 py-5">
      <div className="home_product_top">
        <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between",width:"100%", gap: "1rem" }}>
          <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">
            Product Category
          </h2>
            <button onClick={() => navigate("/product")}>See More</button>
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
                      onClick={() => handelCategory(item.title)}
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
