import React from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* ************* smart components regist start... ***************** */
/* action */
import * as layoutAction from 'actions/layout';
import * as travelApplyAction from 'actions/travelApply'

/* components */
import LayoutView from 'views/layout/Layout'
import TravelApplyView from 'views/pages/apply'

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

/* ************* smart components regist end... ******************* */
export default (
  <Route path="/">
    <Route component={Layout}>
      <IndexRedirect to="/apply"/>
      <Route path="apply" component={ TravelApply } />
      <Redirect from="*" to="/apply" />
    </Route>
  </Route>
);
