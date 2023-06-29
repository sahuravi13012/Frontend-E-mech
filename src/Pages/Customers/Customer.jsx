import React, { useState } from "react";
import { Table } from "antd";

import "../../CssFiles/users.css";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";

function Customer() {
  // const [loading, setloading] = useState([0]);
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(5);
  const data = [
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
    {
      name: "Ravi",
      email: "sahuravi@gmail.com",
      city: "Bhopal",
      state: "MP",
      mobile: "1234567895",
      pin_code: "462003",
      status: "Active",
    },
  ];
  const columns = [
    { title: "Name", dataIndex: "name", key: "0" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "State", dataIndex: "state", key: "state" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Mobile No", dataIndex: "mobile", key: "mobile" },
    { title: "Pin Code", dataIndex: "pin_code", key: "pin_code" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      render: (data) => {
        return (
          <>
            <Link to={`/updatevehiclecategory/${data.vehicle_cat_id}`}>
              <EditFilled
                // onClick={() => handleRoutes(data.vehicle_cat_id)}
                style={{ color: "blue", padding: "10px", fontSize: "20px" }}
              />
            </Link>
            <DeleteFilled
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <h2 className="text-center fw-bold">Customer</h2>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ width: "100px" }}
            >
              <UserAddOutlined style={{ fontSize: "1rem" }} />
            </button>

            <Table
              className="mt-2"
              columns={columns}
              dataSource={data}
              // loading={loading}
              pagination={{
                current: page,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
