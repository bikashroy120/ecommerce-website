import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import OurStoreLeft from "../components/OurStore/OurStoreLeft";
import { useGetAllProductQuery } from "../redux/features/banner/bannerApi";
import Loader from "../components/Loader";
import ReactPaginate from "react-paginate";
import NotFound from "../components/NotFound";

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const [page, setPage] = useState(1);
  const [HiLow, setHiLow] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { search, category } = useSelector((state) => state.auth);

  const { data: products, isLoading } = useGetAllProductQuery(searchQuery, {});

  const itemsPerPage = 12;

  const generateQuery = (selectedCategories, selectedBrands, HiLow) => {
    const queryParams = [];

    if (selectedCategories) {
      selectedCategories.forEach((category) => {
        queryParams.push(`category=${category}`);
      });
    }

    if (selectedBrands) {
      selectedBrands.forEach((brand) => {
        queryParams.push(`brand=${brand}`);
      });
    }

    if (HiLow) {
      queryParams.push(`sort=${HiLow}`);
    }

    return queryParams.join("&");
  };

  useEffect(() => {
    const query = generateQuery(selectedCategories, selectedBrands, HiLow);
    setSearchQuery(`${query}&page=${page}&limit=${itemsPerPage}`);
  }, [selectedCategories, page, selectedBrands, HiLow]);

  useEffect(() => {
    if (search) {
      setSearchQuery(`search=${search}&page=${page}&limit=${itemsPerPage}`);
    }
    if (category) {
      setSelectedCategories([category]);
    }
  }, [search, page, category]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  // console.log(last)
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <OurStoreLeft
            setSelectedCategories={setSelectedCategories}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            setPage={setPage}
          />
          <div className="col-lg-9 col-12">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"def"}
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setHiLow(e.target.value)}
                    value={HiLow}
                  >
                    <option value="">Price</option>
                    <option value="-price">Price: Low to high</option>
                    <option value="price">Price: High to low</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 hide_item">
                  <p className="totalproducts mb-0">{products?.products.length} Products Show</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    {/* <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    /> */}

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div
                className="d-flex flex-wrap Last_item_product"
                style={{ gap: "9px" }}
              >
                {isLoading ? (
                  <>
                    <Loader />
                  </>
                ) : (
                  <>
                    {products?.products?.length === 0 ? (
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
                        <NotFound />
                      </div>
                    ) : (
                      <>
                        <ProductCard grid={grid} product={products?.products} />
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="py-3">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">>"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={itemsPerPage}
                  pageCount={Math.ceil(products?.item / itemsPerPage)}
                  previousLabel="<<"
                  renderOnZeroPageCount={null}
                  containerClassName=" pagination "
                  activeClassName="pagination-active"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
