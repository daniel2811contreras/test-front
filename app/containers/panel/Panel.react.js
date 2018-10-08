/* import connect */
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch} from 'react-router-dom';
import {withCookies, Cookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Crypto from 'crypto-js';

/* import actions */
import {doLogout} from '../../actions/session/SessionActions';

/* import */
import PrivateRoute from '../session/PrivateRoute.react';
import Welcome from '../welcome/Welcome.react';

/* welcome */
import Header from '../../components/panel/Header.react';
import Footer from '../../components/panel/Footer.react';
import NavLeft from '../../components/panel/NavLeft.react';
import ContentPanel from '../../components/panel/ContentPanel.react';

/* containers */
import Service from '../service/Service.react';

/* export class */
class Panel extends React.Component {

  static propTypes = {
    // doInit: PropTypes.func.isRequired,
    doLogout: PropTypes.func.isRequired
  }

  /* contructor */
  constructor() {
    super();
    /* context */
  }

  componentDidMount() {
    // this.props.doInit();
  }

  _handleLogOut() {
    /* return logout */
    this.props.doLogout();
  }


  render() {
    return (<section className="__main-panel">

      <Header/>
      <div className="__main-content-panel">
        <div className="columns __content-panel-mount">
          <NavLeft location={this.props.location.pathname}/>
          <ContentPanel>
            <Switch>
            <PrivateRoute path="/welcome" component={Welcome}/>
            <PrivateRoute path="/map-service" component={Service}/>
            </Switch>

          </ContentPanel>
        </div>
      </div>
    </section>)
  }
}

/* dispatcj to props */
let mapDisToProps = (state, ownProps) => {
  return {doLogout: doLogout}
}
/* export */
export default connect(null, mapDisToProps())(withCookies(Panel));
