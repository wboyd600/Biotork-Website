import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Executives from "./views/Executives/Executives"

import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Technology from "./views/Technology/Technology"
import Contact from "./views/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"
import Projects from "./views/Projects/Projects"
import FuelEthanol from "./views/Projects/FuelEthanol"
import OmegaOils from "./views/Projects/OmegaOils"
import ConsumerAlcohol from "./views/Projects/ConsumerAlcohol"
import Phytase from './views/Projects/Phytase';


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
        
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component = {Contact} />
        <Route exact path="/Projects/Fuel-Ethanol" component={FuelEthanol} />
        <Route exact path="/Projects/Omega-Oils" component={OmegaOils} />
        <Route exact path="/Projects/Consumer-Alcohol" component={ConsumerAlcohol} />
        <Route exact path="/Projects/Phytase" component={Phytase} />




        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;