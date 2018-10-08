/* import */
import React from 'react';
import Select from 'react-select';
import Is from 'is_js';
import {Link} from 'react-router-dom';

/* asdas */
import Card from '../../containers/panel/Card.react';
import Meter from '../../containers/panel/Meter.react';
import Form from '../../containers/panel/Form.react';
import Field from '../../containers/panel/Field.react';
import FieldAreaText from '../../containers/panel/FieldAreaText.react';

/* class */
class CreateService extends React.Component {
  constructor() {
    super();
    this.state = {
      travel:[

        {active:"", name:"WALKING",icon:"fas fa-walking"},
        {active:"", name:"DRIVING",icon:"fas fa-car"},
        {active:"", name:"TRANSIT",icon:"fas fa-bus"},
      ],
      map:{},
      legs:{
        distance:{text:''},
        duration:{text:''}
      },
      //form
      id_service: 0,
      service: "",
      addressOrigin: "",
      destinationAddress: "",
      descripcion: "",
      typeTravel: "",
      //no form
      show: false,
      editState: false,
      editPassword: false,
      loading: "",
      // error
      colorInput: {
        service: "",
        addressOrigin: "",
        destinationAddress: "",
        descripcion: "",
        typeTravel: "",
        viewRouter: "is-success"
      },
      message: {
        service: "",
        addressOrigin: "",
        destinationAddress: "",
        descripcion: "",
        typeTravel: "",
        viewRouter: ""
      }
    };

  }
  _Change(e) {
    this.setState({editState: true});
    var value = e.target.value;
    var name = e.target.name;
    this.setState({[name]: value});
  }
  static getDerivedStateFromProps(next, state) {
    var newState = state;
    if (Is.not.empty(next)) {
      if (next.location.url.indexOf("user-edit") > -1) {
        if ((Is.not.truthy(state.editState)) || (Is.truthy(state.editState) && (Is.not.truthy(state.show)))) {
          // console.log(next.userNew);
          newState = {
            ...state,
            // id_service: next.userNew.id,
            service: next.userNew.service,
            addressOrigin: next.userNew.addressOrigin,
            destinationAddress: next.userNew.destinationAddress,
            descripcion: next.userNew.descripcion,
            typeTravel: next.userNew.typeTravel,
            show: next.show,
          };
        }
      } else {
        if (Is.not.truthy(state.editState)) {
          newState = {
            ...state,
            id_service: 0,
            service: "",
            addressOrigin: "",
            destinationAddress: "",
            descripcion: "",
            typeTravel: "",
            show: false
          };
        }
      }
    }
    return newState;
  }
  _save() {
    // this.setState({editState: false});
    let _message = this.state.message,
      _colorInput = this.state.colorInput;
    if (this.state.service != "" && this.state.addressOrigin != "" &&  this.state.destinationAddress != "" && this.state.descripcion!="" && this.state.typeTravel!="") {
      this.setState({editState: false});
      this.setState({loading: "is-loading", colorInput: "is-success"});
      this.props.doCreate({
        service: this.state.service,
        addressOrigin: this.state.addressOrigin,
        destinationAddress: this.state.destinationAddress,
        descripcion: this.state.descripcion,
        typeTravel: this.state.typeTravel,
        list:this.props.list
      });
      setTimeout(() => {
        this.setState({loading: ""});
      }, 1000);

    } else {
      if (this.state.service == "") {
        _message.service = "This field is required";
        _colorInput.service = "is-danger";
      }
      if (this.state.addressOrigin == "") {
        _message.addressOrigin = "This field is required";
        _colorInput.addressOrigin = "is-danger";
      }
      if (this.state.destinationAddress == "") {
        _message.destinationAddress = "This field is required";
        _colorInput.destinationAddress = "is-danger";
      }
      if (this.state.descripcion == "") {
        _message.descripcion = "This field is required";
        _colorInput.descripcion = "is-danger";
      }
      if (this.state.typeTravel == "") {
        _message.typeTravel = "This field is required";
        _colorInput.typeTravel = "is-danger";
      }
      this.setState({message: _message, colorInput: _colorInput});
      setTimeout(() => {
        this.setState({
          message: {
            service: "",
            addressOrigin: "",
            destinationAddress: "",
            descripcion: "",
            typeTravel: "",
            viewRouter: ""
          },
          colorInput: {
            service: "",
            addressOrigin: "",
            destinationAddress: "",
            descripcion: "",
            typeTravel: "",
            viewRouter: "is-success"
          }
        })
      }, 10000);
    }
  }

  _buttons() {
    if (Is.truthy(this.state.show)) {
      return (
        <div>
        <Link className="button" to="/users" >Cancelar</Link>
        <a className={"button is-link " + this.state.loading} onClick={this._update.bind(this)}>Actualizar</a>
        </div>
      );
    } else {
      return (<a className={"button is-link " + this.state.loading} onClick={this._save.bind(this)}>Guardar</a>);
    }
  }
  _typeTravelState(name){
    var _travel=this.state.travel.map((data,i)=>{
      if(data.name==name){
        data.active='active';
      }else{
        data.active='';
      }
      return data;
    });
    this.setState({typeTravel:name,travel:_travel})
  }
  _typeTravel(){
    return this.state.travel.map((data,i)=>{
      if(data.active=='active'){

        return (
          <a key={i} className="button is-link is-rounded " onClick={this._typeTravelState.bind(this,data.name)}><i className={data.icon}></i></a>
        );
      }else {
        return (
          <a key={i} className="button is-link is-rounded is-outlined " onClick={this._typeTravelState.bind(this,data.name)}><i className={data.icon}></i></a>
        );

      }
    });
  }
  componentDidMount() {
    setTimeout(()=>{
      this._maps();
    },1000);

  }
  _maps(){
    var map = null;
    var _map = document.getElementById('mapaGoogle');
    map = new google.maps.Map( _map , {
      center: {
        lat: 4.6097100,
        lng: -74.0817500
      },
      zoom: 10
    });

    this.setState({map:map,
      legs:{
        distance:{text:''},
        duration:{text:''}
      }
    }

    );
  }
  _ClearMap(){
    console.log('clear');
    this._maps();
  }
  _viewRouter(){
    var selt = this;
    console.log('ok');
    if(this.state.addressOrigin != "" &&  this.state.destinationAddress && this.state.typeTravel!="" ){
      var _ds = new google.maps.DirectionsService();
      var _dr = new google.maps.DirectionsRenderer(
        {
          map:selt.state.map
        }
      );

      var _travelMode={}
      switch (this.state.typeTravel) {
        case 'DRIVING':
          _travelMode=google.maps.TravelMode.DRIVING;

          break;
        case 'WALKING':
          _travelMode=google.maps.TravelMode.WALKING;
          break;
        case 'TRANSIT':
          _travelMode=google.maps.TravelMode.TRANSIT;
          break;
        default:

      }
      _ds.route({
        origin:selt.state.addressOrigin,
        destination:selt.state.destinationAddress,
        travelMode: _travelMode
      },(result,status)=>{
        // muestra ruta
        if(status=='OK'){
          selt.setState({legs:result.routes[0].legs[0]});
          _dr.setDirections(result);
        }else{
          console.log('Error--->'+ status);
        }
      })
      this.setState({
          message: {
          ...this.state.message,
          viewRouter:'successfully calculated route'
        }
      });
      setTimeout(() => {
        this.setState({
          message: {
            ...this.state.message,
            viewRouter:''
          }
        })
      }, 10000);
    }else{
      this.setState({
        colorInput: {
          ...this.state.colorInput,
          viewRouter:'is-danger'
        },
        message: {
          ...this.state.message,
          viewRouter:'You can not calculate the insufficient parameter route'
        }
      });
      setTimeout(() => {
        this.setState({
          colorInput: {
            ...this.state.colorInput,
            viewRouter:'is-success'
          },
          message: {
            ...this.state.message,
            viewRouter:''
          }
        })
      }, 10000);
    }
  }
  _duraction(){
    var _html='';
    var _distance='';
    var _duration='';
    if(this.state.legs.distance.text!=''){
      _distance=(<div className="column is-6">Distance: {this.state.legs.distance.text}</div>)
    }
    if(this.state.legs.duration.text!=''){
      _duration=(<div className="column is-6">Duration: {this.state.legs.duration.text}</div>)
    }
    return _html=(
      <div className="columns">
        {_distance}
        {_duration}
      </div>
    );
  }
  render() {

    return (<Card title={this.props.titleForm} icon="fas fa-map" className="is-above">
      <Form>
        <div className="columns">
          <div className="column is-4">
            <Field nameLabel="Service" name="service" autocomplete="off" value={this.state.service} change={this._Change.bind(this)} placeholder="service" message={this.state.message.service} colorInput={this.state.colorInput.service}></Field>
          </div>
          <div className="column is-4">
            <Field nameLabel="Address of origin" name="addressOrigin" autocomplete="off" value={this.state.addressOrigin} change={this._Change.bind(this)} placeholder="address of origin" message={this.state.message.addressOrigin} colorInput={this.state.colorInput.addressOrigin}></Field>
          </div>
          <div className="column is-4">
            <Field nameLabel="Destination address" name="destinationAddress" autocomplete="off" value={this.state.destinationAddress} change={this._Change.bind(this)} placeholder="destination address" message={this.state.message.destinationAddress} colorInput={this.state.colorInput.destinationAddress}></Field>
          </div>
        </div>
        <div className="columns">
          <div className="column is-8">
            <FieldAreaText nameLabel="Descripción" name="descripcion" autocomplete="off" value={this.state.descripcion} change={this._Change.bind(this)} placeholder="Descripción" message={this.state.message.descripcion} colorInput={this.state.colorInput.descripcion}></FieldAreaText>
          </div>
          <div className="column is-4">
            <div className="buttons">
              {this._typeTravel()}
            </div>
              {this._duraction()}
            <p className={"help " + this.state.colorInput.typeTravel}>{this.state.message.typeTravel}</p>

          </div>
        </div>
        <div className="columns">
          <div className="column is-12">
          <div className="buttons">
            <a className="button is-rounded" onClick={this._viewRouter.bind(this)}>View Router</a>
            <a className="button is-rounded" onClick={this._ClearMap.bind(this)}>Clear Map</a>
            </div>
            <p className={"help " + this.state.colorInput.viewRouter}>{this.state.message.viewRouter}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-12">

            <div id="mapaGoogle" style={{width:'100%',height:'400px'}}></div>
          </div>
        </div>
        {this._buttons()}
      </Form>
    </Card>);
  }
}

export default CreateService;
