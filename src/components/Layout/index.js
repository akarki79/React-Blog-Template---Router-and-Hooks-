import React from "react";
import Sidebar from "../SideBar";
import "./style.css";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        {props.children}
        <Sidebar />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
