/* import react */
import React from 'react';

/* class */
class InfoIcon extends React.Component {

  /*  parent*/
  constructor() {
    super();
  }

  /* render */
  render(){
    return(
      <div className={"content has-text-centered "+ this.props.classcss} {...this.props}>
        <small className="textLast">{this.props.top}</small>
        <h4 className="textSubtitle">{this.props.title}</h4>
        <span className="textNumber">
          <span className="textUnder">
            <i className={this.props.icon}></i>
          </span>
          {this.props.big}
        </span>
      </div>
    )
  }
}

/* expmod */
export default InfoIcon;
