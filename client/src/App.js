import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import NotFound from "./views/NotFound"


import Timeline from "./components/Timeline/Timeline"
const App = () => {
  return (
    <div>
     
      <Switch>
        <Route exact path="/Timeline" component={Timeline} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;