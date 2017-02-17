import * as ActionTypes from '../constants/ActionTypes';

export function onRefresh(){
	return (dispatch,getState) => {
	    return dispatch({
	      	type: ActionTypes.ON_REFRESH
	    })
	}
}
