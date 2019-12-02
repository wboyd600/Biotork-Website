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
import FAQ from "./views/Technology/FAQ"
import Selection from "./views/Technology/Selection"

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"
import Projects from "./views/Projects/Projects"
import FuelEthanol from "./views/Projects/FuelEthanol"
import OmegaOils from "./views/Projects/OmegaOils"
import ConsumerAlcohol from "./views/Projects/ConsumerAlcohol"
import Phytase from './views/Projects/Phytase';
import AboutUs from './views/AboutUs/AboutUs';
import AdminSignIn from './views/AdminSignIn/AdminSignIn';


import Timeline from "./components/Timeline/Timeline"
const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/Timeline" component={Timeline} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Executives" component = {Executives} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={AboutUs} />
        <Route exact path="/Admin" component={AdminSignIn} />
        
        <Route exact path="/Technology" component={Technology} />

        <Route exact path="/Technology/Carbon" component = {Carbon} />
        <Route exact path="/Technology/Culture" component = {Culture} />
        <Route exact path="/Technology/GrowthRate" component = {GrowthRate} />
        <Route exact path="/Technology/Productivity" component = {Productivity} />
        <Route exact path="/Technology/ProductYield" component = {ProductYield} />
        <Route exact path="/Technology/Robust" component = {Robust} />
        <Route exact path="/Technology/Titers" component = {Titers} />
        <Route exact path="/Technology/Tolerance" component = {Tolerance} />
        <Route exact path="/Technology/FAQ" component = {FAQ} />
        <Route exact path="/Technology/Selection" component = {Selection} />

        
        <Route exact path="/Projects" component={Projects} />

        <Route exact path="/Projects/Fuel-Ethanol" component={FuelEthanol} />
        <Route exact path="/Projects/Omega-Oils" component={OmegaOils} />
        <Route exact path="/Projects/Consumer-Alcohol" component={ConsumerAlcohol} />
        <Route exact path="/Projects/Phytase" component={Phytase} />



        <Route exact path="/Timeline" component={Timeline} />

        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;