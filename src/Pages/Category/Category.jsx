import React, { useState, useEffect, memo } from "react";
import { Table, Avatar } from "antd";
import "../../CssFiles/users.css";
import { DeleteFilled } from "@ant-design/icons";

import Add_category from "./Add_category";
import axios from "axios";
import config from "../../config";
import Swal from "sweetalert2";
import Update_category from "./Update_category";

function Category() {
  // const [loading, setloading] = useState([0]);
  const [getdata, setGetData] = useState([]);

  const getCategoryData = async () => {
    const data = await axios.get(`${config.URL}/viewcategory`);

    setGetData(data.data.Response);
  };
  const deletecategory = async (categoryid) => {
    if (window.confirm(`You want to delete data of Id no: =  ${categoryid} `))
      var deletedata = await axios.delete(
        `${config.URL}/deletecategory/${categoryid}`
      );

    getCategoryData();
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Image",
      dataIndex: "category_image",
      key: "category_image",
      width: 5,
      maxWidth: 5,
      render: (data) => (
        <div className="">
          <Avatar
            size={{
              xs: 20,
              sm: 30,
              md: 38,
              lg: 60,
              xl: 75,
              xxl: 90,
            }}
            src={`${data}`}
          />
          {/* <img src={`${data.image}`} width="5" height="5" /> */}
        </div>
      ),
    },
    { title: "GST", dataIndex: "gst", key: "gst" },

    {
      title: "Action",
      render: (data) => {
        return (
          <>
            <Update_category data={data} getCategoryData={getCategoryData} />
            <DeleteFilled
              onClick={() => deletecategory(data.category_id)}
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <h2 className="text-center fw-bold">Category</h2>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <span className="d-flex">
              <h4 className="fw-bold">Add Category</h4>
              <Add_category getData={getCategoryData} />
            </span>

            <Table
              className="mt-2"
              columns={columns}
              dataSource={getdata}
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

export default memo(Category);
