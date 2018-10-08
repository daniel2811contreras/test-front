/*
  React Ethereal - 2018

  Main Content APP
*/
import React from 'react';
import {Route, Switch} from 'react-router';

/* routes */
import PrivateRoute from './session/PrivateRoute.react';

/* run welcome */
import Welcome from './welcome/Welcome.react';
import Login from './login/Login.react';
import Panel from './panel/Panel.react'

/* const */
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>

        <Route path="/login" component={Login}/>
        <PrivateRoute path="/" component={Panel}/>
        
      </Switch>
    )
  }
}

/* default export */
export default App;
