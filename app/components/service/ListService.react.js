/* import  */
import React from 'react';

/* asdas */
import Card from '../../containers/panel/Card.react';
import Meter from '../../containers/panel/Meter.react';
import TableDefault from '../../containers/panel/Table.react';

/* class */
class ListService extends React.Component {
  constructor() {
    super();
        this.state = {
      notificate:'is-hidden',
      infoNoti:{
        service: "test",
        addressOrigin: "test",
        destinationAddress: "test",
        descripcion: "test",
        typeTravel: "WALKING"
      },
      columns: [
        {
          label: "Service",
          field: "service",
          format: null
        }, {
          label: "Action",
          field: "action",
          format: "buttons"
        }
      ]
    };
  }
  _info(row){
    // console.log(row);
    this.setState({notificate:'',infoNoti:row})
  }
  _buttons(info) {
    return (<div className="field has-addons">
        <a className="button is-link is-rounded" onClick={this._info.bind(this,info.row)}>
          <span className="icon is-small">
            <i className="fas fa-info-circle"></i>
          </span>
        </a>
    </div>);
  }
  _closeNotification(){
    this.setState({notificate:'is-hidden'})
  }

  render() {
    return (
      <Card title="List Service" icon="fas fa-list" className="is-above">
      		<TableDefault classcss="is-bordered is-fullwidth" columns={this.state.columns} data={this.props.list} fieldPageIni={5} dataPage={[
          3,
          5,
          10,
          15,
          30,
          50,
          100
        ]} buttons={this._buttons.bind(this)}/>
        <div className={"notification is-link __notification "+this.state.notificate}>
          <button className="delete" onClick={this._closeNotification.bind(this)}></button>
            service: {this.state.infoNoti.service},&nbsp;
            addressOrigin: {this.state.infoNoti.addressOrigin},&nbsp;
            destinationAddress: {this.state.infoNoti.destinationAddress},&nbsp;
            descripcion: {this.state.infoNoti.descripcion},&nbsp;
            typeTravel: {this.state.infoNoti.typeTravel}.
        </div>
      </Card>
    );
  }
}

export default ListService;
