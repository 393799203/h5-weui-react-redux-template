import { combineReducers } from 'redux';

import layout from 'reducers/layout';
import travelApply from 'reducers/travelApply';


export default combineReducers({
	layout,
	travelApply
});
