/* import all dependencies */
import '../system/system';
import React from 'react'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {CookiesProvider} from 'react-cookie';

/* Route */
import {Route, Switch} from 'react-router';
import {Redirect, Link} from 'react-router-dom';

/* app y reducer */
import App from './containers/App.react';
import rootReducer from './reducers/rootReducer';

//Hstoyr
const history = createHistory();

const middleware = [thunk, createLogger(), routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {
  routerReducer: {},
  main: {}
}, composeEnhancers(applyMiddleware(...middleware)));


/* render app */
render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </ConnectedRouter>
</Provider>, document.getElementById('main-app'))
