/* page panel */
import React from 'react';

/* class */
export class PagePanel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<section data-assigned="__main--page" {...this.props}>
      <div className="__main-dashboard-container">
        {this.props.children}
      </div>
    </section>)
  }
}
/* expor default */

export class ContentPanel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<article data-assigned="__content-panel" {...this.props}>
      <div className="__content-main-web">
        <div className="_main-content-cards">
          {this.props.children}
        </div>
      </div>
    </article>)
  }
}

/* export class */
export class TitlePanel extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section {...this.props} data-assigned="__main-title-panel"><section className="hero __main-section-name">
      <div className="hero-body _title-section-name">
        <div className="columns">
          <h1 className="title">
            <i className={this.props.icon}></i> {this.props.title}
          </h1>
        </div>
      </div>
      <div className="hero-foot __main-section-tabs">
        {this.props.children}
      </div>
    </section></section>)
  }
}
