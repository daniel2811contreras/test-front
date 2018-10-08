/* import react */
import React from 'react';
import PropTypes from 'prop-types';
import {Cookies} from 'react-cookie';
import Crypto from 'crypto-js';

/* link */
import {Link} from 'react-router-dom';
const cookies = new Cookies();

/* class */
class NavLeft extends React.Component {

  /* router */
  constructor() {
    super();

    this.state = {
      links: [
        {
          name: 'Services',
          paths: [
            {
              name: 'Map service',
              to: '/map-service',
              icon: 'fas fa-map-signs',
              active: false

            }
          ]
        }
      ]
    }

  }

  /* node */
  _nodeIterator() {
    var self=this;
    let _node = this.state.links.map((data, i) => {
      var _title = data.name;
      var _paths = data.paths;

      return (<div key={i}>
        <p className="menu-label __menu-title-only">
          {_title}
        </p>
        <ul className="menu-list __menu-list-cont">

          {
            _paths.map((path, iter) => {
              return (<li key={iter}>
                <Link className={(
                    self.props.location.indexOf(path.to)>-1)
                    ? 'is-active'
                    : ''} to={path.to}>
                  <i className={path.icon}></i>
                  &nbsp; {path.name}
                </Link>
              </li>)

            }, this)
          }

        </ul>
      </div>)
}, this);
    return _node;
  }

  /* dsis mount */
  componentDidMount(){
    /* render */
  }

  /* load  */

  /* render */
  render() {
    return (<div className="column is-2 __main-nav-bar">
      <aside className="menu __main-nav-content">
        {this._nodeIterator()}
      </aside>
    </div>)
  }
}

/* export */
export default NavLeft;
