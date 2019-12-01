import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Executives from "./views/Executives/Executives"

import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import Technology from "./views/Technology/Technology"

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer"
import Projects from "./views/Projects/Projects"

import PR from "./components/PR/PR"




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
        <Route exact path="/Admin/PressReleases" component={PR} />
        
        <Route exact path="/Projects" component={Projects} />

        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;