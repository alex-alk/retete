import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { withRouter } from "react-router";

class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(SERVER_URL + "/api/recipeCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify({ name: this.state.name, color: this.state.color }),
    }).then(() => {
      this.props.history.push("/admin/categories");
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Add recipe category</h1>
          <form
            className="row g-3"
            id="form"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                name="color"
                onChange={this.handleChange}
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(CategoryCreate);
