/* expor */
import React from 'react';

/* class */
class Meter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <article data-assigned="meter" className={"media __bot-iteractions-team "+ this.props.classcss} {...this.props}>
        <figure className="media-left">
          <span className="image is-64x64 __main-image-bot">
            <div className="__main-sobre-image">
              <i className={this.props.icon}></i>
            </div>
          </span>
        </figure>
        <div className="media-content __main-interaction-content">
          <h3 className="__mode-title">{this.props.name}</h3>
          <div className="__meter-into-text">{this.props.text}</div>
          <div className="__meter-is-inline">
            <div className="__meter-indicator" style={{
                width: this.props.per + "%"
              }}></div>
          </div>
        </div>
        <div className="media-right">
          {this.props.per}%
        </div>
      </article>
    )
  }
}

/* export */
export default Meter;
