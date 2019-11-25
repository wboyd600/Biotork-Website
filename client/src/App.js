import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Executives from "./views/Executives/Executives"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"

import Technology from "./views/Technology/Technology"
import Carbon from "./views/Technology/Carbon"
import Culture from "./views/Technology/Culture"
import GrowthRate from "./views/Technology/GrowthRate"
import Productivity from "./views/Technology/Productivity"
import ProductYield from "./views/Technology/ProductYield"
import Robust from "./views/Technology/Robust"
import Titers from "./views/Technology/Titers"
import Tolerance from "./views/Technology/Tolerance"


import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Executives" component = {Executives} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Technology" component={Technology} />
        <Route exact path="/Technology/Carbon" component = {Carbon} />
        <Route exact path="/Technology/Culture" component = {Culture} />
        <Route exact path="/Technology/GrowthRate" component = {GrowthRate} />
        <Route exact path="/Technology/Productivity" component = {Productivity} />
        <Route exact path="/Technology/ProductYield" component = {ProductYield} />
        <Route exact path="/Technology/Robust" component = {Robust} />
        <Route exact path="/Technology/Titers" component = {Titers} />
        <Route exact path="/Technology/Tolerance" component = {Tolerance} />


        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
