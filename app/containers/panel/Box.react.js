/* import */
import React from 'react';

/* class */
class BoxReact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<article data-assigned="box" className={"box " + this.props.classcss} {...this.props}>
      {this.props.children}
    </article>)
  }
}

/* export default */
export default BoxReact;
