import React, { Component } from "react";
import { SERVER_URL } from "../../constants";
import { withRouter } from "react-router";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./recipe.css";

class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "http://localhost:8080/api/recipeCategories/1",
      name: "",
      content: "",
      recipeCategs: [],
      photoSrc: "",
      editorState: EditorState.createEmpty(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();


    // fetch(SERVER_URL + "api/recipes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     content: this.state.content,
    //     category: {id: this.state.categoryId},
    //     photoSrc: 'filled in the backend',
    //   }),
    // }).then(() => {
    //   this.props.history.push("/admin/recipes");
    // });

    const formData = new FormData();
    formData.append("image", this.state.photoSrc);
    console.log("state: ");
    console.log(this.state.photoSrc);

    fetch(SERVER_URL + "api/recipe/saveImage", {
      method: "POST",
      
      body: formData,
    }).then(() => {
      console.log(formData);
      //this.props.history.push("/admin/recipes");
    }).catch((err) => console.error(err));;
  }

  handleChange(event) {
    const target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (name === "photoSrc") {

      let value = target.files[0];
        this.setState({
          [name]: value,
        });
      
    } else {
      this.setState({
        [name]: value,
      });
    }

    
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
          <h1 className="page-title">Add recipe</h1>
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
              Name:{" "}
              <input type="text" name="name" onChange={this.handleChange} />
            </div>
            <div className="form-group mb-4">
              Photo: <input type="file" name="photoSrc" onChange={this.handleChange} />
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
    document.title = "Create recipe | Rețete";
    fetch(SERVER_URL + "api/recipeCategories")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          recipeCategs: responseData._embedded.recipeCategories,
          categoryId: responseData._embedded.recipeCategories[0].id,
        });
      })
      .catch((err) => console.error(err));
  }
}
export default withRouter(CategoryCreate);
