// import React, { useState } from "react";
import "./dist/css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoContainer from "./pages/VideoContainer";
import PerformanceContainer from "./pages/PerformanceContainer";
import WritingContainer from "./pages/WritingContainer";
// import { initialState } from "./assets/state";

function App() {
  // const [items, setItems] = useState(initialState.items);
  // const [cartItems, setCartItems] = useState(initialState.cartItems);

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/video">
          <VideoContainer />
        </Route>
        <Route path="/performance">
          <PerformanceContainer />
        </Route>
        <Route path="/writing">
          <WritingContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
