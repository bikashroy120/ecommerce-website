import React from "react";
import { BsCart2 } from "react-icons/bs";
import { MdWifiProtectedSetup } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import Table from "../Table";

const Dashbord = ({ data }) => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row._id?.slice(0, 8),
    },
    {
      name: "ORDERTIME",
      selector: (row) => row.createdAt?.slice(0, 10),
    },
    {
      name: "METHOD",
      selector: (row) => row.method,
      center: true,
    },
    {
      name: "STATUS",
      selector: (row) => (
        <p
          className={
            (row.orderStatus === "Pending" && "text-danger") ||
            (row.orderStatus === "Processing" && "text-warning") ||
            (row.orderStatus === "Complete" && "text-primary")
          }
          style={{ margin: "0", padding: "0" }}
        >
          {row.orderStatus}
        </p>
      ),
      center: true,
    },
    {
      name: "TOTAL",
      selector: (row) => row.totle,
      center: true,
    },
  ];

  return (
    <div className="">
      <h5 className="mb-4">Dashboard</h5>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-3">
          <div className=" d-flex align-items-center gap-3 dashbord_Icon">
            <div style={{ background: "" }}>
              <BsCart2 style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h6 style={{ margin: "0", padding: "0" }}>Total Order</h6>
              <h5 style={{ margin: "0", padding: "0" }}>{data?.totalOrder}</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className=" d-flex align-items-center gap-3 dashbord_Icon">
            <div style={{ background: "rgb(247, 124, 192)" }}>
              <MdWifiProtectedSetup style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h6 style={{ margin: "0", padding: "0" }}>Pending Order</h6>
              <h5 style={{ margin: "0", padding: "0" }}>
                {data?.paddingOrder}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className=" d-flex align-items-center gap-2 dashbord_Icon">
            <div style={{ background: "rgb(106, 191, 247)" }}>
              <CiDeliveryTruck style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h6 style={{ margin: "0", padding: "0" }}>Processing Orde</h6>
              <h5 style={{ margin: "0", padding: "0" }}>
                {data?.ProcessingOrder}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className=" d-flex align-items-center gap-3 dashbord_Icon">
            <div style={{ background: "rgb(128, 225, 141)" }}>
              <GiCheckMark style={{ fontSize: "30px" }} />
            </div>
            <div>
              <h6 style={{ margin: "0", padding: "0" }}>Complete Order</h6>
              <h5 style={{ margin: "0", padding: "0" }}>
                {data?.CompleteOrder}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h5 className=" mt-4">Recent Order</h5>
          <div className="border_data">
            <Table columns={columns} data={data?.order} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
