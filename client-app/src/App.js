import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import CategoryIndex from "./components/category/index";
import CategoryCreate from "./components/category/create";
import NotFound from "./not-found";
import CategoryEdit from "./components/category/edit";
import RecipeCreate from "./components/recipe/create";

function App() {
  
  return (
    <Router>
      <div>
      <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/admin"  />

          <Route exact path="/admin/category" component={CategoryIndex} />
          <Route exact path="/admin/category/create" component={CategoryCreate} />
          <Route exact path="/admin/category/:id/edit" component={CategoryEdit} />

          <Route exact path="/admin/recipe/create" component={RecipeCreate} />

          <Route path="*">
            <NotFound />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
