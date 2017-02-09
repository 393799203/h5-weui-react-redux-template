import React from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* ************* smart components regist start... ***************** */
/* action */
import * as layoutAction from 'actions/layout';
import * as travelApplyAction from 'actions/apply';
import * as travelAuditListAction from 'actions/auditList';
import * as travelAuditedListAction from 'actions/auditedList';
import * as travelMyListAction from 'actions/myList';
import * as travelDetailAuditAction from 'actions/detailAudit';

/* components */
import LayoutView from 'views/layout/Layout'
import TravelApplyView from 'views/pages/apply'
import TravelAuditListView from 'views/pages/auditList'
import TravelAuditedListView from 'views/pages/auditedList'
import TravelMyListView from 'views/pages/myList'
import TravelDetailAuditView from 'views/pages/detailAudit';

var connectRedux = function(component, model = [], actions = null) {
  return connect(
    (state) => {
      let needState = {};
      if(model.length){
        model.map((item)=>{
          Object.assign(needState, state[item]);
        })
      }else{
        needState = state;
      }
      return needState;
    },
    actions ? (dispatch) => {
      return {
        actions: bindActionCreators(actions, dispatch)
      }
    }: null
  )(component);
}

let Layout = connectRedux(LayoutView, ['layout'],layoutAction);
let TravelApply = connectRedux(TravelApplyView, ['travelApply'], travelApplyAction)
let TravelAuditList = connectRedux(TravelAuditListView, ['travelAuditList'], travelAuditListAction)
let TravelAuditedList = connectRedux(TravelAuditedListView, ['travelAuditedList'], travelAuditedListAction)
let TravelMyList = connectRedux(TravelMyListView, ['travelMyList'], travelMyListAction)
let TravelDetailAudit = connectRedux(TravelDetailAuditView, ['travelDetailAudit'], travelDetailAuditAction)

/* ************* smart components regist end... ******************* */
export default (
  <Route path="/">
    <Route component={Layout}>
      <IndexRedirect to="/apply"/>
      <Route path="apply" component={ TravelApply } />
      <Route path="audit" component={ TravelAuditList } />
      <Route path="audited" component={ TravelAuditedList } />
      <Route path="my" component={ TravelMyList } />
      <Route path="detail/:id" component={ TravelDetailAudit } />
      <Route path="audit/:id" component={ TravelDetailAudit } />
      <Redirect from="*" to="/apply" />
    </Route>
  </Route>
);
