import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import CategoryIndex from "./components/category/index";
import CategoryCreate from "./components/category/create";
import NotFound from "./not-found";
import CategoryEdit from "./components/category/edit";
import RecipeCreate from "./components/recipe/create";
import RecipeList from "./components/recipe/list";
import RecipeEdit from "./components/recipe/edit";
import Login from "./components/login/login";
import Auth from "./Auth";
import Register from "./components/register/Register";

function App() {
  if (!Auth.isAuthenticated) {
    return (
      <Router>
        <div>
          <Navbar />
          {window.location.pathname !== "/admin/register" && (
            <Redirect to="/admin/login" />
          )}
          <Switch>
            <Route exact path="/admin/login" component={Login} />
            <Route exact path="/admin/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div>
        <Navbar />
        {window.location.pathname !== "/admin/login" && <Sidebar />}
        <Switch>
          <Route exact path="/admin" />
          <Route exact path="/admin/login" component={Login} />

          <Route exact path="/admin/category" component={CategoryIndex} />
          <Route
            exact
            path="/admin/category/create"
            component={CategoryCreate}
          />
          <Route
            exact
            path="/admin/category/:id/edit"
            component={CategoryEdit}
          />
          <Route exact path="/admin/recipes" component={RecipeList} />
          <Route exact path="/admin/recipes/create" component={RecipeCreate} />
          <Route exact path="/admin/recipes/:id/edit" component={RecipeEdit} />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
