/* import */
import React from 'react';
import Is from 'is_js';

/* class */
class FieldReact extends React.Component {
  constructor() {
    super();

    this.state = {
      nameLabel:"name field",
      name:"name",
      classfield:"",
      control:"",
      colorInput:"",
      type:"text",
      placeholder:"example field",
      value:"",
      message:"",
      disabled:false
    }
  }

  static getDerivedStateFromProps(next , state){

      var newState=state;
      var _json=state;
      if(Is.not.empty(next)){
        if(Is.not.undefined(next.name)){
         _json.name=next.name;
        }
        if(Is.not.undefined(next.nameLabel)){
         _json.nameLabel=next.nameLabel;
        }
        if(Is.not.undefined(next.classfield)){
          _json.classfield=next.classfield;
        }
        if(Is.not.undefined(next.control)){
          _json.control=next.control;
        }
        if(Is.not.undefined(next.colorInput)){
          _json.colorInput=next.colorInput;
        }
        if(Is.not.undefined(next.type)){
          _json.type=next.type;
        }
        if(Is.not.undefined(next.placeholder)){
          _json.placeholder=next.placeholder;
        }
        if(Is.not.undefined(next.value)){
          _json.value=next.value;
        }
        if(Is.not.undefined(next.message)){
          _json.message=next.message;
        }
        if(Is.not.undefined(next.disabled)){
          _json.disabled=next.disabled;
        }

        newState={...state, _json}
      }
      return newState;

  }

  _handleChange(e){
    this.setState({value:e.target.value});
    this.props.change(e);
  }


  render() {
    return (
      <div className = {"field "+this.state.classfield} >
          <label className="label">{this.state.nameLabel}</label>
            <div className={"control "+this.state.control}>
                <input className={"input "+this.state.colorInput} type={this.state.type} name={this.state.name}
                 placeholder={this.state.placeholder} value={this.state.value}
                  onChange={this._handleChange.bind(this)} onClick={this.props.click} disabled={this.state.disabled}/>
                {this.props.children}
            </div>
            <p className={"help "+this.state.colorInput}>{this.state.message}</p>
     </div>
    )
  }
}

/* export default */
export default FieldReact;
