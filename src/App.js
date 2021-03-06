import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import Map from "./views/Map/Map";
import About from "./views/About/About";
import NotFound from "./views/NotFound";
import Login from "./views/LogIn/Login";


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/map" component={Map} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
