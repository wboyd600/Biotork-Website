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
        <Route exact path="/ContactUs" component = {Contact} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;