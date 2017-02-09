import * as ActionTypes from '../constants/ActionTypes';

export function setNavList(navListData){
	return (dispatch,getState) => {
	    return dispatch({
	      	type: ActionTypes.SET_NAVLIST,
	      	navListData
	    })
	}
}

export function setActiveMenu(activeMenu){
	return (dispatch, getState)=>{
		return dispatch({
			type: ActionTypes.SET_ACTIVEMENU,
			activeMenu
		})
	}
}