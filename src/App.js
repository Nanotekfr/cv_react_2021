import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Accueil from "./pages/Accueil";
import Cv from "./pages/Cv";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import P404 from "./pages/P404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/cv" component={Cv} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={P404} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;