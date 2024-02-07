import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { wishActions } from "../redux/features/wishlist/wishlistSlice";
import NotFound from "../components/NotFound";

const Wishlist = () => {
  const dispacth = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishList);

  const deleteWishlist = (id) => {
    dispacth(wishActions.removeToWhishList(id));
    toast.success("SuccessFully remove wishlist");
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishList.length === 0 ? (
            <><NotFound></NotFound></>
          ) : (
            <>
              {" "}
              {wishList?.map((item, i) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6" key={i}>
                    <div className="wishlist-card position-relative">
                      <img
                        onClick={() => deleteWishlist(item._id)}
                        src="images/cross.svg"
                        alt="cross"
                        className="position-absolute cross img-fluid"
                      />
                      <div className="wishlist-card-image">
                        <img
                          src={
                            item.images[0]
                              ? item.images[0]
                              : "images/2748558.png"
                          }
                          className="img-fluid w-100"
                          alt="watch"
                        />
                      </div>
                      <div className="py-3 px-3">
                        <h5 className="title">{item.title?.slice(0, 40)}</h5>
                        <h6 className="price">$ {item.price}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
