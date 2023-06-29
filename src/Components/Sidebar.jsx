import React, { useState } from "react";
import "../CssFiles/sidebar.css";

import Items from "./sidebarData";
import Navbar from "./Navbar";

import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          // collapsedWidth="45"
          width="200px"
          color="white"
        >
          <span>
            <h4 className="text-center mt-1" style={{ color: "white" }}>
              E-mart
            </h4>
          </span>

          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={Items}
            style={{ textDecoration: "none" }}
          />
        </Sider>
        <Layout className="site-layout">
          <div className="container"></div>
          <Navbar />
          <Content
            style={{
              margin: "0 16px",
              backgroundColor: "#f6f9fc",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default Sidebar;
