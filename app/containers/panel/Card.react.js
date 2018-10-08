/* react import */
import React from 'react';

/* class */
class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<article data-assigned="card-content" {...this.props}>
      <div className="card __main-card-items">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-6">
              <i className={this.props.icon}></i>
              &nbsp; {this.props.title}</p>
          </div>
          <hr/>
          <div className="media-subcontent">
            {this.props.children}
          </div>
        </div>
      </div>
    </article>)
  }
}

export default Card;
