import { combineReducers } from 'redux';

import layout from 'reducers/layout';
import travelApply from 'reducers/travelApply';
import travelAuditList from 'reducers/travelAuditList';

export default combineReducers({
	layout,
	travelApply,
	travelAuditList
});
