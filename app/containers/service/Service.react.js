/* import */
import React from 'react';
import {connect} from 'react-redux';
import {PropTypes, instanceOf} from 'prop-types';
import Is from 'is_js';
/* actions */
import {doCreate} from '../../actions/service/ServiceActions';


/* import  */
import ListService from '../../components/service/ListService.react';
import CreateService from '../../components/service/CreateService.react';

/* title */
import { PagePanel, ContentPanel, TitlePanel } from '../panel/PagePanel.react';
import { TabList, TabItem, Tabs, TabContent } from '../panel/Tabs.react';

/* Class */
class Service extends React.Component {
    /* parent */
    constructor() {
        super();
        this.state={
          listView:"",
          titleForm:"Create Service",
        }
    }
    static getDerivedStateFromProps(next, state) {

        var newState = state;
        if (Is.not.empty(next)) {
          console.log('--->>'+next.match.url);
        if(next.match.url.indexOf("Service-edit") > -1 ){
          console.log('--->'+next.match.url);
          newState={
            ...state,
            listView:"is-hidden",
            titleForm:"Editar Service"
          };
          if(Is.not.truthy(next.show)){
            console.log("show:"+next.show);
            next.doShow({id:next.match.params.id},next.match.url);
          }
        }else{
          newState={
            ...state,
            listView:"",
            titleForm:"Create Service"
          };
        }
      }
      return newState;

    }
    componentDidMount() {

    }
    render() {
        return (<PagePanel>
            <TitlePanel title="Service" icon="fas map-signs">
              <TabList>
                <TabItem target="map" active={true}>map</TabItem>
              </TabList>
            </TitlePanel>

            <ContentPanel>
              <Tabs>
                <TabContent path="map">
                  <div className="columns">
                    <div className={"column is-8 "+this.state.listView}>
                      <CreateService titleForm={this.state.titleForm}  location={this.props.match} list={this.props.services}
                      doCreate={this.props.doCreate}/>
                    </div>
                    <div className="column is-4">
                      <ListService list={this.props.services}/>
                    </div>
                  </div>

                </TabContent>
              </Tabs>
            </ContentPanel>
          </PagePanel>)
    }

}
var disToProps = (state, ownProps) => {
  return {
    services:state.main.service.services,
    code:state.main.service.code,
    show:state.main.service.show
  };
}

var mapDisToProps = (state, ownProps) => {
  return {
    doCreate:doCreate
   };
 }
export default connect(disToProps, mapDisToProps())(Service);
