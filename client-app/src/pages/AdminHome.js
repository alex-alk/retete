import React, { Component } from "react";

export default class AdminHome extends Component {
  render() {
    return (
      <div id="adminhome">
        <div className="page-content">
          <h1 className="page-title">Admin Home</h1>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Admin | Home";
  }
}
