import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}
export default BaseLayout;
