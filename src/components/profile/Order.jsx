import React from "react";
import Table from "../Table";
import { useNavigate } from "react-router-dom";

const Order = ({ data }) => {
  const navigate = useNavigate();

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
    {
      name: "ACTION",
      selector: (row) => (
        <button
          onClick={() => navigate(`/order/${row._id}`)}
          style={{
            background: "rgb(235, 141, 53)",
            padding: "5px",
            borderRadius: "8px",
            color: "black",
            border: "none",
          }}
        >
          details
        </button>
      ),
      center: true,
    },
  ];

  return (
    <div className="">
      <h5 className="mb-4">My Order</h5>
      <div className="row">
        <div className="col-12">
          <div className="border_data">
            <Table columns={columns} data={data.order} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
