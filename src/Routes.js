
import * as React from "react";
import  {Home}  from './modules/Home';
import  {Login}   from './components/dumb/Login';
import {Register} from './components/dumb/Register'
import Random from "./components/smart/Random";
import { Router, Switch, Route } from './router';
import {history} from './store/history';

export const Routes = () => {
    return(
      <Router history={history}>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/random' component={Random}/>
          </Switch>
      </Router>
    );

};
