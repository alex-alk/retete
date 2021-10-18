import React, { Component } from "react";
//import { SERVER_URL } from "../../constants";
import "./sidebar.css";

class Sidebar extends Component {
	//constructor(props) {
	//super(props);
	//this.state = { recipeCategs: [] };
	//}

	render() {
		return (
			<aside class="bd-sidebar">
				<div class="flex-shrink-0 p-3 bg-white" style={{width: 280}}>
					<a href="/admin/home" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
						<span class="fs-5 fw-semibold">Admin Dashboard</span>
					</a>
					<ul class="list-unstyled ps-0">
						<li class="mb-1">
							<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" id="platforms-btn" data-bs-target="#platforms" aria-expanded="false">
								Categories
                    </button>
							<div class="collapse" id="platforms">
								<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><a id="show-platforms-link" href="/admin/platform/list.xhtml" class="link-dark rounded">Show categories</a></li>
									<li><a id="add-platform-link" href="/admin/category/create" class="link-dark rounded">Add category</a></li>
								</ul>
							</div>
						</li>

						<li class="mb-1">
							<button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" id="add-chapter-btn" data-bs-target="#chapters" aria-expanded="false">
								Recipes
                    </button>
							<div class="collapse" id="chapters">
								<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><a id="show-chapters-link" href="/admin/chapter/list.xhtml" class="link-dark rounded">Show recipes</a></li>
									<li><a id="add-chapters-link" href="/admin/chapter/create.xhtml" class="link-dark rounded">Add recipe</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</aside>
		);
	}


	/*
	render() {
		const categs = this.state.recipeCategs.map((recipeCateg, index) => (
			<li className="mb-1" key={index}>
				<button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={"#home-collapse-" + index} id={"btn-collapse-" + index} aria-expanded="false">
					{recipeCateg.name}
				</button>
				<div className="collapse" id={"home-collapse-" + index}>
					<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
						{recipeCateg.recipes.map((recipe, index2) => (
							<li key={index2}><a href="/chapter/index?id={recipe.id}&amp;platform=#{chapter.platform.id}&amp;chapter=#{chapter.urlName}" 
								id={"chapter-link-" + recipe.id} className="link-dark rounded">{recipe.name}</a></li>
						))}
					</ul>
				</div>
			</li>
		));
		return (
			<aside className="bd-sidebar">
				<div className="flex-shrink-0 p-3 bg-white" style={{width: 280}}>
					<a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
						<span className="fs-5 fw-semibold">Rețete</span>
					</a>
					<ul className="list-unstyled ps-0">
						{categs}
					</ul>
				</div >
			</aside >
		);
	}

	componentDidMount() {
		document.title = "Admin | Rețete";
		fetch(SERVER_URL + "api/recipeCategories")
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					recipeCategs: responseData._embedded.recipeCategories,
				});
			})
			.catch((err) => console.error(err));
	}*/

}
export default Sidebar;
