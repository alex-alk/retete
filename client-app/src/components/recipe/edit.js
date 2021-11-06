import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { withRouter } from "react-router";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "./recipe.css";

class RecipeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: 0,
      content: "",
      name: "",
      recipeCategs: [],
      photo: "",
      editorState: EditorState.createEmpty(),
      recipe: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.photo);
    formData.append(
      "recipe",
      JSON.stringify({
        id: this.state.recipe.id,
        name: this.state.name,
        content: this.state.content,
        category: { id: this.state.categoryId },
      })
    );

    fetch(SERVER_URL + "api/recipe/update", {
      method: "PATCH",
      headers: {'Authorization': sessionStorage.getItem("jwt")},
      body: formData,
    })
      .then(() => {
        this.props.history.push("/admin/recipes");
      })
      .catch((err) => console.error(err));
  }

  handleChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "photo") {
      value = target.files[0];
    }
    this.setState({
      [name]: value,
    });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <div className="page-content">
          <h1 className="page-title">Edit recipe</h1>
          <form id="form-chapter" method="POST" onSubmit={this.handleSubmit}>
            Category:{" "}
            <select className="mb-4" onChange={this.handleChange}>
              {this.state.recipeCategs.map((recipeCateg, index) => (
                <option value={recipeCateg.id} key={index}>
                  {recipeCateg.name}
                </option>
              ))}
            </select>
            <div className="form-group mb-4">
              Name:&nbsp;
              <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
            <div className="form-group mb-4">
              {this.state.recipe.id && <img src={SERVER_URL + "images/recipe" + this.state.recipe.id + ".jpg"} alt="img" />}
              Photo:&nbsp;
              <input type="file" name="photo" onChange={this.handleChange} />
            </div>
            <div id="editor-wrapper">
              <Editor
                editorState={editorState}
                wrapperClassName="wrapper-draft"
                editorClassName="editor-draft"
                toolbarClassName="toolbar-draft"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.title = "Create recipe | Recipes";

    fetch(SERVER_URL + "api/recipeCategories/")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          recipeCategs: responseData._embedded.recipeCategories
        });
      })
      .catch((err) => console.error(err));
    
    fetch(SERVER_URL + "api/recipes/" + this.props.match.params.id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          recipe: responseData,
          categoryId: responseData.category.id,
          name: responseData.name,
          editorState: EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(responseData.content)))
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(RecipeEdit);
