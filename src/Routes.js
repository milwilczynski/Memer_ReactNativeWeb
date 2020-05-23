
import * as React from "react";
import  {Home}  from './modules/Home';
import  {Login}   from './modules/dumb/Login';
import {Register} from './modules/dumb/Register'
import {Random} from "./modules/dumb/Random";
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
