import React, { Component } from "react";
import { SERVER_URL } from "../../constants";

class CategoryCreate extends Component {
  //SERVER_URL + 'api/recipeCategories'

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    fetch(SERVER_URL + "api/recipeCategories", {
        method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.value }),
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Add category</h1>
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
                onChange={this.handleChange}
              />
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
export default CategoryCreate;
