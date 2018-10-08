/* import */
import React from 'react';
import Is from 'is_js';

/* class */
class FieldTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listJust: false,
      listView: "is-hidden",
      tags: [],
      tagsEdit: true,
      tagsNew: [],
      input: "",
      requiereList: false,
      addkey: [13],
      colorTag: "is-dark",
      valueTag: 5,
      valueTagView: false,
      placeholder: "text..."

    }
    this.input = React.createRef();

  }
  static getDerivedStateFromProps(next, state) {

    var newState = state;
    var _json = state;

    if (Is.not.empty(next)) {
      if (Is.not.undefined(next.placeholder)) {
        _json.placeholder = next.placeholder;
      }
      if (Is.not.undefined(next.list)) {
        _json.list = next.list;
      }
      if (Is.not.undefined(next.listJust)) {
        _json.listJust = next.listJust;
      }
      if (Is.not.undefined(next.tags)) {
        _json.tags = next.tags;
      }
      if (Is.not.undefined(next.requiereList)) {
        _json.requiereList = next.requiereList;
      }
      if (Is.not.undefined(next.addkey)) {
        _json.addkey = next.addkey;
      }
      if (Is.not.undefined(next.colorTag)) {
        _json.colorTag = next.colorTag;
      }
      if (Is.not.undefined(next.valueTag)) {
        _json.valueTag = next.valueTag;
      }
      if (Is.not.undefined(next.valueTagView)) {
        _json.valueTagView = next.valueTagView;
      }

      newState = {
        ...state,
        _json
      }
    }
    return newState;

  }
  _close(i) {
    // console.log(i);
    let newTag = [];
    this.state.tags.map((data, j) => {
      if (j != i) {
        newTag.push(data);
      }
    });
    // this.setState({tagsNew: newTag,tagsEdit:false});
    this.props.onAdd(newTag);

  }
  _tags() {

    let _tags = this.state.tags.map((data, i) => {
      let _button = "",
        _input = "";
      if (Is.truthy(data.close)) {
        _button = (<button className="delete is-small" onClick={this._close.bind(this, i)}></button>);
      }
      // if (Is.truthy(data.input)) {
      if (Is.truthy(this.state.valueTagView)) {
        _input = (<input className="__inputTag" value={data.value} onClick={this._inputTag.bind(this)} name={i} onChange={this._changeTag.bind(this)}/>);
      }
      return (<span className={"tag " + data.classTag} key={i}>
        {_input}&nbsp;{data.name}&nbsp;{_button}
      </span>);
    });
    return _tags;

  }
  _inputRegular(value, expreg) {
    if (expreg.test(value))
      return true;
    else
      return false;
    }
  _changeTag(e) {
    let _tags = this.state.tags;
    let j = e.target.name;
    let _val = e.target.value;
    let data = _tags[j];
    let expreg = /^[0-9]+$/;
    if (!this._inputRegular(_val, expreg)) {
      _val = _val.slice(0, -1);
    }
    if (_val != "") {
      data.value = parseInt(_val);
    } else {
      data.value = _val;
    }
    _tags[j] = data;
    // this.setState({tagsNew: _tags,tagsEdit:true})
    this.props.onAdd(_tags);
  }
  componentDidMount() {
    // if (Is.not.truthy(this.state.tagsEdit)) {
    // let _tags = this.state.tags;
    // this.setState({tagsNew: _tags});
    // }
  }
  _focusInput(e) {
    // console.log(e.target);
    this.input.current.focus();
  }
  _inputTag(e) {
    e.stopPropagation();
  }
  _Change(e) {
    e.stopPropagation();

    this.setState({listView: ""})
    let _val = e.target.value;
    if (_val == "") {
      this.setState({listView: "is-hidden"})
    }
    this.setState({input: _val})
  }
  _addKey(e) {
    let _tag = false;
    let _tags = this.state.tags;
    this.state.addkey.map((data, i) => {
      if (data == e.charCode) {
        _tag = true;
      }
    });
    if (Is.truthy(_tag)) {

      let _newtag = {
        name: this.state.input,
        close: true,
        // input: this.state.valueTagView,
        value: this.state.valueTag,
        classTag: this.state.colorTag
      };
      let _unique = true
      _tags.map((_data) => {
        if (_data.name == _newtag.name) {
          _unique = false;
        }
      });
      if (Is.not.truthy(this.state.listJust)) {
        // console.log(_tags);
        if (Is.truthy(_unique)) {
          _tags.push(_newtag);
        }
        this.setState({input: "", listView: "is-hidden", tagsEdit: true});
        this.props.onAdd(_tags);
      } else {
        let _listJust = false;
        this.state.list.map((data, i) => {
          if (this.state.input == data) {
            _listJust = true;
          }
        });
        if (Is.truthy(_listJust)) {
          // console.log(_tags);
          if (Is.truthy(_unique)) {
            _tags.push(_newtag);
          }
          this.setState({input: "", listView: "is-hidden", tagsEdit: true});

          this.props.onAdd(_tags);
        }
      }
    }
  }
  _list() {
    let _list = "";
    _list = this.state.list.map((data, i) => {
      if (data.indexOf(this.state.input) > -1) {
        return (<p key={i} className="__option" onClick={this._selectOption.bind(this, data)}>{data}</p>);
      }
    });
    return _list;
  }
  _selectOption(option) {
    let _tags = this.state.tags;
    let _newtag = {
      name: option,
      close: true,
      // input: this.state.valueTagView,
      value: this.state.valueTag,
      classTag: this.state.colorTag
    };
    let _unique = true
    _tags.map((_data) => {
      if (_data.name == _newtag.name) {
        _unique = false;
      }
    });
    if (Is.truthy(_unique)) {
      _tags.push(_newtag);
    }
    this.setState({newTag: _tags, input: "", listView: "is-hidden", tagsEdit: true});
    this.props.onAdd(_tags);

  }
  render() {
    let _list = "";
    if (this.state.list.length > 0) {
      _list = (<div className={"__panel __cont "+this.props.classcss+ " " + this.state.listView}>
        <p><small>option...</small></p>
        {this._list()}
      </div>);
    }
    return (<div className={"__FieldTag " + this.props.classcss}>
      <div className={"__cont " + this.props.classcss} onClick={this._focusInput.bind(this)}>
        <div className="tags">
          {this._tags()}
          &nbsp;<input className="__input" ref={this.input} placeholder={this.state.placeholder} value={this.state.input} onChange={this._Change.bind(this)} onKeyPress={this._addKey.bind(this)}/>
        </div>
      </div>
      {_list}
    </div>)
  }
}

/* export default */
export default FieldTag;
