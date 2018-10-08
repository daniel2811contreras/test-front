/*
  Welcome to React ethera, a stater-kit for React based on Redux

  Here are your react and redux code, ready to code

 */

 /* here main dependencies */
import React from 'react';
import {Route, Switch} from 'react-router';


/*  here class render */
class Welcome extends React.Component {
  constructor() {
    super();
  }

  /* render */
  render(){
    return (

      <section className="hero is-fullheight is-light is-bold has-text-centered">
        <div className="hero-head"><small>if you wanna help, send me a mail to <a href="mailto:fyara014@gmail.com">fyara014@gmail.com</a></small></div>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Welcome to <strong className="has-text-success">React Ethereal</strong>
            </h1>
            <h2 className="subtitle">
              a simple starter-kit ReactJs and Redux
            </h2>
          </div>
        </div>
        <div className="hero-foot">
          Enjoy the ride, love the ending
          <br />
          <a href="https://bulma.io">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24"/>
          </a>
        </div>

        <a href="https://github.com/YaraWebDeveloper/react_ethereal" target="_blank"><img style={{
        position: 'absolute',
         top: 0, right: 0, border: 0
        }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" alt="Fork me on GitHub" /></a>
      </section>

    )
  }
}

export default Welcome;
