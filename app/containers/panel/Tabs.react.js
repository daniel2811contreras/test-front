/* import tables */
import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

/* class tablist */
export class TabList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div className="tabs" {...this.props}>
      <ul className="">{this.props.children}</ul>
    </div>)
  }
}

/* Tab Item */
export class TabItem extends React.Component {
  constructor() {
    super();

    /* doc */
    this._selectTabActive = this._selectTabActive.bind(this);
    this._onClickEvent = this._onClickEvent.bind(this);
  }

  componentDidMount() {
    /* component mount */
    this._selectTabActive();
  }

  componentDidUpdate() {
    // this._selectTabActive();
    console.log(this.props.active);
    console.log(this.props.target);
    this._selectTagNose()
  }

  _selectTagNose() {
    var _self = this;

    if (!$('.__main-tab-target-' + _self.props.target).hasClass('is-active')) {
      $('.__content-tabs').removeClass('is-active');

      if (this.props.active) {

        $('.__main-tab-target-' + _self.props.target).addClass('is-active');

        /* fadell */
        $('.__main-content-content-tab').fadeOut('slow', function() {
          $('#' + _self.props.target).fadeIn('slow');
        });
      }
    }

  }

  _selectTabActive() {
    if (this.props.active) {
      if (document.getElementById(this.props.target)) {
        document.getElementById(this.props.target).style.display = 'block';
      }
    }
  }

  _onClickEvent(el) {
    var _self = this;
    /* click */
    if (!$('.__main-tab-target-' + _self.props.target).hasClass('is-active')) {
      $('.__content-tabs').removeClass('is-active');
      $('.__main-tab-target-' + _self.props.target).addClass('is-active');

      /* fadell */
      $('.__main-content-content-tab').fadeOut('slow', function() {
        $('#' + _self.props.target).fadeIn('slow');
      });
    }

  }

  render() {
    return (<li className={(
        (this.props.active)
        ? 'is-active'
        : '') + " __content-tabs __main-tab-target-" + this.props.target} onClick={this._onClickEvent}>
      <a data-target={this.props.target}>{this.props.children}</a>
    </li>)
  }
}

/* tab content */
export class Tabs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="__main-content-tabs">
        {this.props.children}
      </div>
    );
  }
}

/* tab content */
export class TabContent extends React.Component {

  state = {
    isActive: true
  }

  constructor() {
    super();
  }
  render() {
    const {isActive} = this.state;
    return (
      <div className="__main-content-content-tab" id={this.props.path}>
        {this.props.children}
      </div>
    );
  }
}
