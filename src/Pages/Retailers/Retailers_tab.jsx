import React from "react";
import Retailers from "./Retailers";
import Add_Retailers from "./Add_Retailers";
import { Tabs } from "antd";
const { TabPane } = Tabs;

function Retailers_tab() {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="View Retailers" key="1">
          <Retailers />
        </TabPane>
        <TabPane tab="Add Retailers" key="2">
          <Add_Retailers />
        </TabPane>
      </Tabs>
    </>
  );
}

export default Retailers_tab;
