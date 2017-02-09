import * as ActionTypes from '../constants/ActionTypes';

export function setApp(appType){
  return (dispatch,getState) => {
    let app = appType||'mogujie';
    return dispatch({
      type: ActionTypes.SET_TITLE,
      app : app
    })
  }
}