import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getSingalProduct } from "../services/product/productSlice";
import ProductCardHome from "../components/ProductCardHome";
import { cartActions } from "../services/card/cardSlice";
import { toast } from "react-toastify";

const SingleProduct = () => {

  const parems = useParams()
  const dispatch = useDispatch()
  console.log(parems.id)
  const {Singalproduct,product} = useSelector((state)=>state.product)
  const [image,setImage] = useState()
  const [count,setCount] = useState(1)
  const [activeTab,setActiveTap] = useState(1)
  console.log(Singalproduct)
  const [grid, setGrid] = useState(3);


  const data = [
    {
      id:1,
      title:"Description"
    },
    {
      id:2,
      title:"Reviews"
    }
  ]


  useEffect(()=>{
    dispatch(getSingalProduct(parems.id))
  },[parems.id])


  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: `http://localhost:5000/uploads/${image}`
  };

  useEffect(()=>{

    if(Singalproduct.images){
      setImage(Singalproduct?.images[0])
    }
  },[Singalproduct])


  const fachtProduct = ()=>{
    dispatch(getProduct())
  }


  useEffect(()=>{
    fachtProduct()
  },[])

  const addToCart = (product,count) =>{
    if(product.quantity===0){
      toast.error("SuccessFully add Cart")
   }else{
    dispatch(cartActions.addToCart({
      id:product._id,
      productname: product.title,
      feature_image: product.images[0],
      price:product.price,
      quentyte:count,
      p_brand:product.brand.title,
      p_category:product.category.title,
      p_avaleable:product.quantity,
  }))};
  toast.success("SuccessFully add Cart")
  }

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>
      <Meta title={Singalproduct?.title} />
      <BreadCrumb title={Singalproduct?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-5 col-12">
            <div className="main-product-image">
              <div>
                {/* <ReactImageZoom {...props} /> */}
                <img src={'http://localhost:5000/uploads/'+image} alt="image"/>
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">

                {
                  Singalproduct?.images?.map((item,i)=>{
                    return(
                      <div key={i} onClick={()=>setImage(item)} style={{ borderColor:`${item===image ? "red" : ""}`,cursor:"pointer" }}>
                      <img
                        src={'http://localhost:5000/uploads/'+item}
                        className="img-fluid"
                        style={{height:"100px", width:"100px"}}
                        alt=""
                      />
                    </div>
                    )
                  })
                }
            {/* {'http://localhost:5000/uploads/'+item.images[0]} */}
  
            </div>
          </div>
          <div className="col-md-7 col-12">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  {Singalproduct?.title}
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {Singalproduct?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={Singalproduct?.totalrating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( {Singalproduct?.totalrating} Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{Singalproduct?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{Singalproduct?.brand?.title}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{Singalproduct?.category?.title}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex align-items-center gap-15 flex-row flex-wrap mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="button_card">
                      <button onClick={()=>setCount((pre)=> pre===1? 1 : pre-1)} style={{cursor:`${count===1 ? "not-allowed" :""}`}}>
                        -
                      </button>
                      <div>
                          {count}
                      </div>
                      <button onClick={()=>setCount((pre)=>pre+1)}>
                        +
                      </button>
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      onClick={()=>addToCart(Singalproduct,count)}
                      className="button border-0"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                {/* <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          
          <div className="col-12">
              <div className="tab_ber">
                {
                  data.map((item,i)=>{
                    return(
                      <h4 onClick={()=>setActiveTap(item.id)} className={activeTab === item.id ? "active_tap" : ""} key={i} style={{cursor:"pointer"}}>
                          {item.title}
                      </h4>
                    )
                  })
                }
              </div>
          </div>
          <div className="col-12">

            
            {

                activeTab === 1 ? (
                  <div className="bg-white p-3" dangerouslySetInnerHTML={{__html:Singalproduct?.description}}>
                  </div>
                ):(
                  <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="">
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">Submit Review</button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Navdeep</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Consectetur fugit ut excepturi quos. Id reprehenderit
                        voluptatem placeat consequatur suscipit ex. Accusamus dolore
                        quisquam deserunt voluptate, sit magni perspiciatis quas
                        iste?
                      </p>
                    </div>
                  </div>
                </div>
                )
            }

          </div>
        </div>
      </Container>
      {/* <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="popular-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
            <div className="products-list pb-5">
              <div className="home_product">
                <ProductCardHome grid={grid} product={product}/>
              </div>
        </div>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img src={watch} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">Apple Watch</h6>
                  <p className="mb-1">Quantity: asgfd</p>
                  <p className="mb-1">Color: asgfd</p>
                  <p className="mb-1">Size: asgfd</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                View My Cart
              </button>
              <button type="button" className="button signup">
                Checkout
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Continue To Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
