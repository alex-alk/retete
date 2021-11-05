import React, { Component } from "react";
import { SERVER_URL } from "../constants";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = { recipes: [] };
    }

    render() {
        const tableRows = this.state.recipes.map((recipe, index) => (
            <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.content}</td>
                <td>{recipe.photoSrc}</td>
            </tr>
        ));
        return (
            <div className="App">
                <table>
                    <tbody>{tableRows}</tbody>
                </table>
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
export default Recipes;
