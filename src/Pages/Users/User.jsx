import React, { useState, useEffect } from "react";
import { Table, Switch } from "antd";
import ViewAllRole from "./ViewAllRole";
import "../../CssFiles/users.css";
import { EditFilled } from "@ant-design/icons";
import Add_Users from "./Add_Users";
import AssignRole from "./AssignRole";
import axios from "axios";
import config from "../../config";
import "antd/dist/reset.css";

function User() {
  // const [loading, setloading] = useState([0]);
  const [getData, setData] = useState();

  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(5);
  const getUsersData = async () => {
    const data = await axios.get(`${config.URL}/viewusers`);
    // console.log("data", data);
    setData(data.data.response);
  };

  useEffect(() => {
    getUsersData();
  }, []);
  const toggleStatus = async (id, newStatus) => {
    console.log("newStatus", newStatus);
    try {
      const data111 = await axios.put(
        `${config.URL}/updateuserstatus/${id}/status`,
        {
          status: newStatus,
        }
      );
      console.log("data1111", data111);
      getUsersData();
    } catch (error) {
      console.error("Failed to update retailer status:", error);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",

      render: (record) => {
        {
          // console.log(data, "dataaaaaaaa");
        }
        return (
          <>
            <AssignRole data={record} getData={getUsersData} />
            <ViewAllRole id={record.id} getData={getUsersData} />
          </>
        );
      },
    },
    {
      title: "Assigned On",
      dataIndex: "createdon",
      key: "createdon",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (data, record) => {
        console.log("data", data);
        console.log("record", record.status);
        return (
          <Switch
            checked={data === "active"}
            onChange={(checked) => {
              const newStatus = checked ? "active" : "inactive";
              toggleStatus(record.id, newStatus);
            }}
          />
        );
      },
    },

    {
      title: "Action",
      render: () => {
        return (
          <>
            <EditFilled
              style={{ color: "blue", padding: "10px", fontSize: "20px" }}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <h2 className="text-center fw-bold">Users</h2>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            {/* <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={()=>Add_Users}
            >
            Launch demo modal
          </button> */}
            <Add_Users getData={getUsersData} />
            <Table
              className="mt-2"
              columns={columns}
              dataSource={getData}
              // loading={loading}
              // scroll={{ x: "max-content", y: 300 }}

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

export default User;
