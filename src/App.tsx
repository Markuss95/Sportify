import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Home,
  Error,
  About,
  SingleProductPage,
  CommingSoonPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <CommingSoonPage />
        </Route>
        <Route exact path="/login">
          <CommingSoonPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProductPage />} />
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
