import React from "react";
import OurStoryCategoryFilter from "./OurStoryCategoryFilter";
import FilterByBrand from "./FilterByBrand";

const OurStoreLeft = ({
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
}) => {
  // const [min, setMin] = useState();
  // const [mix, setMix] = useState();

  return (
    <>
      <div className="col-lg-3 col-12">
        <div className="filter-card mb-3">
          <h3 className="filter-title">Shop By Categories</h3>
          <OurStoryCategoryFilter
            setSelectedCategories={setSelectedCategories}
            selectedCategories={selectedCategories}
          />
        </div>
        <div className="filter-card mb-3">
          <h3 className="filter-title">Filter By Brand</h3>
          <div>
            <FilterByBrand
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
            {/* <h5 className="sub-title">Price</h5>
            <div className="d-flex align-items-center gap-10">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="From"
                  onChange={(e) => setMin(e.target.value)}
                  value={min}
                />
                <label htmlFor="floatingInput">From</label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput1"
                  placeholder="To"
                  onChange={(e) => setMix(e.target.value)}
                  value={mix}
                />
                <label htmlFor="floatingInput1">To</label>
              </div>
              <div
                className="product_read_more_button"
                style={{ marginTop: 0, paddingTop: "0px" }}
              >
                {
                        mix === "" ? null : <button onClick={()=>priceHandel()}>go</button>
                      }
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>
                </div>
              </div>
            </div> */}
        {/* <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div> */}
      </div>
    </>
  );
};

export default OurStoreLeft;
