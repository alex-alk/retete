import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .delete(SERVER_URL + "/api/recipes/" + event.target.id.value)
      .then(() => {
        this.componentDidMount();
      });
  }

  render() {
    const categs = this.state.recipes.map((recipe, index) => (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.category.name}</td>
        <td>
          <Link
            style={{ marginRight: "5px" }}
            className="btn btn-primary"
            to={"/admin/recipes/" + recipe.id + "/edit"}
          >
            Edit
          </Link>
          <form style={{ display: "inline" }} onSubmit={this.handleSubmit}>
            <input type="hidden" name="id" value={recipe.id} />
            <button className="btn btn-danger" type="submit">
              Delete
            </button>
          </form>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Recipes</h1>

          <table
            className="table table-bordered table-responsive"
            style={{ maxWidth: "600px" }}
          >
            <thead>
              <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>{categs}</tbody>
          </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document.title = "Admin | Rețete";
    axios
      .get(SERVER_URL + "/api/recipes")
      .then((response) => {
        this.setState({
          recipes: response.data,
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(RecipeList);
