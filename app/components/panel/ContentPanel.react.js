/* Connect react */
import React from 'react';

/* class */
class ContentPanel extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="column is-10 is-offset-2 _main-content-all-panel">
        {this.props.children}
      </div>
    )
  }
}
/* export */
export default ContentPanel;
