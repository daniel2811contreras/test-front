/* import */
import React from 'react';

/* class */
class ModalDefault extends React.Component {
  constructor() {
    super();
  }
  _noViewModal(){
    var element = document.getElementById(this.props.id);
   element.classList.remove("is-active");
  }
  render() {
    return (<div className="modal" id={this.props.id}>
      <div className="modal-background"></div>
      <div className="modal-content">
        {this.props.children}
      </div>
      {/* <button className="modal-close is-large" aria-label="close" onClick={this._noViewModal.bind(this)}></button> */}
    </div>)
  }
}

/* export default */
export default ModalDefault;
