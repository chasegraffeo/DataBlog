import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Compose from "./views/Compose";
import Navbar from "./component/Navbar";

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/compose">
          <Compose />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/admin/:id">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

interface AppProps {}

export default App;
