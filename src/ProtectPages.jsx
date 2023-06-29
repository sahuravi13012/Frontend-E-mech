import { Routes, Route } from "react-router-dom";

// import "./App.css";
import Privateroute from "./Pages/Privateroute";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Roles from "./Pages/Roles/Roles";
import User from "./Pages/Users/User";
import Retailers from "./Pages/Retailers/Retailers";
import Category from "./Pages/Category/Category";
import SubCategory from "./Pages/SubCategory/SubCategory";
import Third_party_product from "./Pages/Products/Third_party_product";
import Offer_Zones from "./Pages/Offers/Offer_Zones";
import Customer from "./Pages/Customers/Customer";
import Retailers_tab from "./Pages/Retailers/Retailers_tab";
import Update_role from "./Pages/Roles/Update_role";

import React from "react";

function ProtectPages() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route
            path="/dashboard"
            element={<Privateroute Component={Dashboard} />}
          />
          <Route path="/role" element={<Privateroute Component={Roles} />} />

          <Route path="/user" element={<Privateroute Component={User} />} />
          <Route
            path="/retailers"
            element={<Privateroute Component={Retailers_tab} />}
          />
          <Route
            path="/viewretailers"
            element={<Privateroute Component={Retailers} />}
          />

          <Route
            path="/customer"
            element={<Privateroute Component={Customer} />}
          />
          <Route
            path="/offerzones"
            element={<Privateroute Component={Offer_Zones} />}
          />
          <Route path="/product" element={<Third_party_product />} />
          <Route
            path="/category"
            element={<Privateroute Component={Category} />}
          />
          <Route
            path="/subcategory"
            element={<Privateroute Component={SubCategory} />}
          />
        </Routes>
      </Sidebar>
    </>
  );
}

export default ProtectPages;
