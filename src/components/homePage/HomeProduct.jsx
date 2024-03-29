import React from 'react'
import Container from '../Container'
import { useGetAllProductQuery } from '../../redux/features/banner/bannerApi'
import ProductCardHome from '../ProductCardHome'
import { useNavigate } from 'react-router-dom'

const HomeProduct = () => {
    const navigate = useNavigate();
    const {data} = useGetAllProductQuery("")

  return (
         <Container class1="featured-wrapper py-2 home-wrapper-2">
            <div className="home_product_top">
              <div
                style={{ display: "flex", alignItems: "center",justifyContent:"space-between",width:"100%", gap: "1rem" }}
              >
                <h2 className="m-0 text-[0.9rem] md:text-[1.5rem]">
                  Just For You
                </h2>
                <button onClick={() => navigate("/product")}>See More</button>
              </div>
            </div>

            <div className="products-list pb-5">
              <div className="home_product">
                <ProductCardHome grid={3} product={data?.products} />
              </div>
              <div className="product_read_more_button">
                {/* {product.length !== finalProduct.length ? (
                  <button onClick={() => setcount((pre) => pre + 15)}>
                    Read More
                  </button>
                ) : null} */}
              </div>
            </div>
          </Container> 
  )
}

export default HomeProduct