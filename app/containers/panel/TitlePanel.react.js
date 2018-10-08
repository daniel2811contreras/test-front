/* import containers */
import React from 'react';

/* export class */
class TitlePanel extends React.Component {
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

/* export de class */
export default TitlePanel;
