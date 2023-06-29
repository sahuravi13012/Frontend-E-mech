import React, { useEffect, useState } from "react";
import { Table, Avatar } from "antd";
import "../../CssFiles/users.css";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Add_SubCategory from "./Add_SubCategory";
import UpdateSubCategory from "./UpdateSubcategory";
import axios from "axios";
import config from "../../config";

function SubCategory() {
  const [getSubCategoryData, setSubCategoryData] = useState([]);
  // const [loading, setloading] = useState([0]);
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(5);
  const getSubcategoryData = async () => {
    const getData = await axios.get(`${config.URL}/viewsubcategory`);
    console.log("data", getData.data.Response[0].category_name);
    setSubCategoryData(getData.data.Response);
  };
  useEffect(() => {
    getSubcategoryData();
  }, []);

  const deleteSubCategory = async (subcategoryid, categoryid) => {
    console.log(subcategoryid, "and", categoryid);
    if (
      window.confirm(
        `You want to delete data of Id no: =  ${
          (subcategoryid, "and", categoryid)
        } `
      )
    )
      var deletedata = await axios.delete(
        `${config.URL}/deletesubcategory/${subcategoryid}/${categoryid}`
      );

    getSubcategoryData();
  };

  const columns = [
    {
      title: "SubCategory Name",
      dataIndex: "subcategory_name",
      key: "subcategory_name",
    },
    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },

    {
      title: "Image",
      dataIndex: "subcategory_image",
      key: "subcategory_image",
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
          {console.log("image", data)}
          {/* <img
          src={`http://localhost:4000/${data}`}
          width="5"
          height="5"
        />
          {/* {console.log(`http://localhost:4000/${data}`)} */}
        </div>
      ),
    },
    { title: "Add Date", dataIndex: "date", key: "date" },

    {
      title: "Action",
      render: (data) => {
        return (
          <>
            <UpdateSubCategory data={data} getData={getSubcategoryData} />

            <DeleteFilled
              onClick={() =>
                deleteSubCategory(data.subcategory_id, data.category_id)
              }
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <h2 className="text-center fw-bold">SubCategory</h2>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <span className="d-flex">
              <h4 className="fw-bold">Add Category</h4>
              <Add_SubCategory getData={getSubcategoryData} />
            </span>

            <Table
              className="mt-2"
              columns={columns}
              dataSource={getSubCategoryData}
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

export default SubCategory;
