import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import config from "../config";
function Customer_cards() {
  const [getCustomerCount, setCustomerCount] = useState({});
  const getData = async () => {
    const apiData = await axios.get(`${config.URL}/totalcustomer`);

    setCustomerCount(apiData.data.response[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col ">
          <div
            className="card w-75"
            style={{
              background: "#f8f8f8",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="mt-2 d-flex align-items-center justify-content-center">
              <div
                className="circle-icon d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "#3366cc",
                  color: "#ffffff",
                }}
              >
                <UserOutlined style={{ fontSize: "40px" }} />
              </div>
            </div>
            <div className="card-body text-center">
              <h5
                className="card-title fw-bold fs-3 ms-3"
                style={{ color: "#ff9900" }}
              >
                {/* {getUserCount.map((value)=>value.TotalUser)} */}
                {getCustomerCount && getCustomerCount.TotalCustomer}+
              </h5>
              <p
                className="card-text fw-bold fs-5"
                style={{ color: "#777777" }}
              >
                Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer_cards;
