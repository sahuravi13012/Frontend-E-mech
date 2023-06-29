import React from "react";
import { NavLink } from "react-router-dom";

import CategoryIcon from "@mui/icons-material/Category";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import {
  ProjectOutlined,
  PlusCircleOutlined,
  ApartmentOutlined,
  ShoppingOutlined,
  UserSwitchOutlined,
  UserOutlined,
} from "@ant-design/icons";
function getItem(label, key, icon, children) {
  return {
    key,
    icon: React.cloneElement(icon, { style: { fontSize: "1rem" } }),
    children,
    label: React.cloneElement(label, {
      style: { fontSize: "1rem", textDecoration: "none", marginTop: "15px" },
    }),
  };
}

const Items = [
  getItem(
    <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem", marginTop: "5px" }}>Dashboard</b>
    </NavLink>,
    "sub1",
    <ProjectOutlined />
  ),
  getItem(
    <NavLink to="/user" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem" }}>User</b>
    </NavLink>,
    "sub2",
    <UserOutlined />
  ),
  getItem(
    <NavLink to="/role" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem" }} className="mt-5">
        Role
      </b>
    </NavLink>,
    "sub3",
    <PlusCircleOutlined />
  ),
  getItem(
    <NavLink to="/category" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem", marginTop: "100px" }}>Category</b>
    </NavLink>,
    "sub4",
    <CategoryIcon />
  ),
  getItem(
    <NavLink to="/subcategory" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem" }}>SubCategory</b>
    </NavLink>,
    "sub5",
    <ApartmentOutlined />
  ),
  getItem(
    <NavLink to="/retailers" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem" }}>Retailers</b>
    </NavLink>,
    "sub6",
    <ShoppingOutlined />
  ),
  getItem(
    <NavLink to="/customer" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem" }}>Customer</b>
    </NavLink>,
    "sub7",
    <UserSwitchOutlined />
  ),
  getItem(
    <NavLink to="/offerzones" style={{ textDecoration: "none" }}>
      <b style={{ fontSize: "1rem" }}> Offer Zones</b>
    </NavLink>,
    "sub8",
    <SellOutlinedIcon />
  ),
];
export default Items;
