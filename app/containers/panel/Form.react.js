/* import */
import React from 'react';

/* class */
class FormReact extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div className={this.props.classcss}>
            {this.props.children}
          </div>)
  }
}

/* export default */
export default FormReact;
