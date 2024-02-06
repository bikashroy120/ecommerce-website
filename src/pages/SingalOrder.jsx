import React, { useRef } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import Table from "../components/Table";
import { useGetSingleOrderQuery } from "../redux/features/auth/authApi";
import Loader from "../components/Loader";
import ReactToPrint from "react-to-print";
import { AiFillPrinter } from "react-icons/ai";

const SingalOrder = () => {
  const params = useParams();
  const { data: singalOrder, isLoading } = useGetSingleOrderQuery(params.id);
  const componentRef = useRef();

  const columns = [
    {
      name: "SR.",
      selector: (row) => (
        <img
          src={`${row.feature_image}`}
          className=""
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          alt="product"
        ></img>
      ),
      center: true,
      width: "150px",
    },
    {
      name: "PRODUCT NAME",
      selector: (row) => row.productname,
      width: "250px",
    },
    {
      name: "QUANTITY",
      selector: (row) => row.quantity,
      center: true,
    },
    {
      name: "ITEM PRICE",
      selector: (row) => row.amount_item,
      center: true,
    },
    {
      name: "AMOUNT",
      selector: (row) => row.total_price,
      center: true,
    },
  ];

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className="invoice_box" ref={componentRef}>
              <div className="invoice_box_first_div flex-wrap px-5">
                <div className="invioce_head">
                  <div>
                    <h3>INVOICE</h3>
                    <p>
                      Status :{" "}
                      <span
                        className={
                          (singalOrder.orderStatus === "Pending" &&
                            "text-danger") ||
                          (singalOrder.orderStatus === "Processing" &&
                            "text-warning") ||
                          (singalOrder.orderStatus === "Complete" &&
                            "text-primary")
                        }
                        style={{ margin: "0", padding: "0" }}
                      >
                        {singalOrder.orderStatus}
                      </span>
                    </p>
                  </div>
                  <div>
                    <h3>Bik Corner</h3>
                    <p style={{ marginTop: "-10px" }}>Dhaka,bangladesh</p>
                    <p style={{ marginTop: "-20px" }}>01773372120</p>
                  </div>
                </div>
                <div className=" d-flex justify-content-between flex-wrap pt-3">
                  <div>
                    <h5>Date</h5>
                    <p>{singalOrder?.createdAt?.slice(0, 10)}</p>
                  </div>
                  <div className="">
                    <h5>INVOICE NO.</h5>
                    <p>#10142</p>
                  </div>
                  <div>
                    <h5>INVOICE TO.</h5>
                    <p>dfdf Bikash</p>
                  </div>
                </div>
              </div>

              <div className=" py-5 px-5">
                <div className=" border_data">
                  <Table columns={columns} data={singalOrder.products} />
                </div>
              </div>

              <div className=" background_color py-5 px-5 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div>
                  <h5>PAYMENT METHOD</h5>
                  <p>{singalOrder.method}</p>
                </div>
                <div>
                  <h5>SHIPPING COST</h5>
                  <p>{singalOrder.shipping === "FedEx" ? "60" : "20"}</p>
                </div>
                <div>
                  <h5>DISCOUNT</h5>
                  <p>$ {singalOrder.discount}</p>
                </div>
                <div>
                  <h5>TOTAL AMOUNT</h5>
                  <h5 style={{ color: "red" }}>$ {singalOrder.totle}</h5>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="">
                <ReactToPrint
                  trigger={() => (
                    <button className=" text-center btn btn-sm text-white capitalize btn-primary my-5">
                      <AiFillPrinter size={18} className="mr-1" />{" "}
                      Print/Download
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default SingalOrder;
