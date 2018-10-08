/* import */
import React from 'react';
import Is from 'is_js';

/* class */
class FieldAreaTextReact extends React.Component {
  constructor() {
    super();

    this.state = {
      nameLabel:"name field",
      name:"name",
      classfield:"",
      control:"",
      colorInput:"",
      placeholder:"example field",
      value:" ",
      message:"",
      max:null,
      contador:false,
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
        if(Is.not.undefined(next.placeholder)){
          _json.placeholder=next.placeholder;
        }
        if(Is.not.undefined(next.value)){
          _json.value=next.value;
        }
        if(Is.not.undefined(next.message)){
          _json.message=next.message;
        }
        if(Is.not.undefined(next.max)){
          _json.max=next.max;
        }
        if(Is.not.undefined(next.contador)){
          _json.contador=next.contador;
        }

        newState={...state, _json}
      }
      return newState;

  }

  _contador(){
    let _contador="";
    if(Is.truthy(this.state.contador)){
      _contador=this.state.value.length
      // _contador=_contador.length
    }
    return _contador;
  }

  _handleChange(e){
    this.setState({value:e.target.value});
    this.props.change(e);
  }


  render() {
    let _cont="";
    if(Is.not.null(this.state.max) && Is.truthy(this.state.contador)){
      _cont="/";
    }
    return (
      <div className = {"field __field_main "+this.state.classfield} >
          <label className="label">{this.state.nameLabel}</label>
            <div className={"control "+this.state.control}>
                <textarea className={"textarea "+this.state.colorInput} name={this.state.name} type="text"
                 placeholder={this.state.placeholder} value={this.state.value} max={this.state.max}
                  onChange={this._handleChange.bind(this)} onClick={this.props.click} ></textarea>
                <label className="__field_contador">{this._contador()}{_cont}{this.state.max}</label>
            </div>
            <p className={"help "+this.state.colorInput}>{this.state.message}</p>
     </div>
    )
  }
}

/* export default */
export default FieldAreaTextReact;
