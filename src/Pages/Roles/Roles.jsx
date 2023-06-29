import React, { useState, useEffect } from "react";
import { Table, Tabs } from "antd";
import Add_Role from "./Add_Role";
import "../../CssFiles/users.css";
import { useNavigate } from "react-router-dom";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import axios from "axios";
import config from "../../config";
import Update_role from "./Update_role";

function Roles() {
  const navigate = useNavigate();
  const [getroles, setRoles] = useState([]);
  // const [loading, setloading] = useState([0]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const getData = async () => {
    const apidata = await axios.get(`${config.URL}/viewrole`);
    console.log(apidata.data.response);
    setRoles(apidata.data.response);
  };
  const deleteuser = async (roleid) => {
    if (window.confirm(`You want to delete data of Id no: =  ${roleid} `))
      await axios.delete(`${config.URL}/deleterole/${roleid}`);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    // { title: "Role Id", dataIndex: "roleid", key: "roleid" },
    {
      title: "Role",
      dataIndex: "rolename",
      key: "rolename",
      style: { fontSize: "50px" },
    },

    {
      title: "Action",
      render: (data) => {
        return (
          <>
            {/* <Link to={`/updaterole/${data.roleid}`}> */}

            <Update_role
              roleid={data.roleid}
              rolename={data.rolename}
              getdata={getData}
            />
            {/* <EditFilled
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ color: "blue", padding: "10px", fontSize: "20px" }}
              onClick={() =>
                navigate("/updaterole", {
                  state: { data },
                })
              }
            /> */}
            {/* </Link> */}
            <DeleteFilled
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
              onClick={() => {
                deleteuser(data.roleid);
              }}
            />
          </>
        );
      },
    },
  ];
  const headerStyle = { background: "skyblue" };
  return (
    <>
      <div className="containe " style={{ marginLeft:"30%"}}>
        <div className="row">
          <div className="col-6 mt-5">
            <span className="d-flex">
              <h4 className="fw-bold">View Role</h4>
              <Add_Role getData={getData} />
            </span>

            <Table
              className="mt-2  "
              columns={columns}
              dataSource={getroles}
              // loading={loading}
              rowKey="Id"
              pagination={{
                current: page,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
              }}
              bordered
              components={{
                header: {
                  cell: (props) => (
                    <th style={headerStyle}>{props.children}</th>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Roles;
