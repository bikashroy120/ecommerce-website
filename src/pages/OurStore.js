import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../services/product/productSlice";
import { useEffect } from "react";

const OurStore = () => {
  const [grid, setGrid] = useState(3);
  const {product} = useSelector((state)=>state.product)
  const [brand,setbrand] = useState([])
  const [category,setCategory] = useState([])
  const [select,setSelect]=useState([])
  const [filterCat,setFilterCat] = useState("")
  const [update,setUpdate]=useState([])
  const [last,setLast]=useState([])
  const dispacth = useDispatch()

  useEffect(()=>{
    let category = []
    const brandName = []

    for (let i = 0; i< product.length;i++){
      const element = product[i]
      category.push(element.category.title)
    }

    for (let i = 0; i< category.length;i++){
        const element = category[i]
        let index = brandName.indexOf(element)    
        if(index == -1){
          brandName.push(element)
        }
      }
      
      setCategory(brandName)
      setUpdate(product)
  },[product])

  useEffect(()=>{
    if(filterCat===""){
      setUpdate(product)
    }else{
      const  updataproduct = product.filter((item)=>item.category.title === filterCat)
      setUpdate(updataproduct)
      setLast(updataproduct)
    }
  },[product,filterCat])

  useEffect(()=>{
    let category = []
    const brandName = []

    for (let i = 0; i< update.length;i++){
      const element = update[i]
      category.push(element.brand.title)
    }

    for (let i = 0; i< category.length;i++){
        const element = category[i]
        let index = brandName.indexOf(element)    
        if(index == -1){
          brandName.push(element)
        }
      }
      setbrand(brandName)
  },[filterCat,update])


  const fachtProduct = ()=>{
    dispacth(getProduct())
  }
  useEffect(()=>{
    fachtProduct()
  },[])



  // console.log(product)
  const categorySet = (item)=>{
    setFilterCat(item)
  }


const handelSelect = (item)=>{
  const isSelect = Boolean(select.find((i)=> i === item))
  if(isSelect){
    setSelect(select.filter((i)=> i !== item))
  }else{
    setSelect((pre)=>[...pre,item])
  }

}

useEffect(()=>{
  if(select.length===0){
    setLast(update)
  }else{
    const last = update.filter((e)=>select.includes(e.brand.title))
    setLast(last)
  }
},[select,update])

console.log(last)
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className=" ml-5">
                  <li style={{fontSize:"17px"}} onClick={()=>categorySet("")} className={`${""===filterCat? " text-danger" : ""}`}>{"All"}</li>
                    {
                      category?.map((item,i)=>{
                        return(
                          <li style={{fontSize:"17px"}} onClick={()=>categorySet(item)} className={`${item===filterCat? " text-danger" : ""}`} key={i}>{item}</li>
                        )
                      })
                    }
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By Brand</h3>
              <div>
                <div>

                  <div className="form-check">

                      {
                        brand?.map((item,i)=>{
                          const isSelect = Boolean(select.find((i)=> i === item))
                          return(
                            <div key={i} className="form-check">
                            <input
                              className="form-check-input"
                              onChange={() => handelSelect(item)}
                              type="checkbox"
                              id={item}
                              checked={isSelect}
                            />
                            <label className="form-check-label" htmlFor={item}  style={{fontSize:"17px",marginTop:"-3px"}}>
                              {item}
                            </label>
                            </div>
                          )
                        })
                      }

                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
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
          <div className="col-lg-9 col-12">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 hide_item">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
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
                    />

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
              <div className="d-flex flex-wrap Last_item_product" style={{gap:"9px"}}>
                <ProductCard grid={grid} product={last}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
