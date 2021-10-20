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
import BaseLayout from "./base";

function App({location}) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/admin/category/create">
			<BaseLayout />
            <CategoryCreate />
          </Route>
          <Route exact path="/admin">
		  	<BaseLayout />
          </Route>
          <Route path='*' exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
