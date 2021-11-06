import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(SERVER_URL + "api/recipes/" + event.target.id.value, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': sessionStorage.getItem("jwt")
      },
      body: JSON.stringify({ id: event.target.id.value }),
    }).then(() => {
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
            className="btn btn-primary"
            to={"/admin/recipes/" + recipe.id + "/edit"}
          >Edit
          </Link>
          <form style={{display: "inline"}} onSubmit={this.handleSubmit}>
            <input type="hidden" name="id" value={recipe.id} />
            <button className="btn btn-danger" type="submit">Delete</button>
          </form>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Recipes</h1>

          <table>
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
    fetch(SERVER_URL + "api/recipes")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          recipes: responseData._embedded.recipes,
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(RecipeList);
