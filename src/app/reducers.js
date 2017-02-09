import { combineReducers } from 'redux';

import layout from 'reducers/layout';
import travelApply from 'reducers/apply';
import travelAuditList from 'reducers/auditList';
import travelAuditedList from 'reducers/auditedList';
import travelMyList from 'reducers/myList';
import travelDetailAudit from 'reducers/detailAudit';

export default combineReducers({
	layout,
	travelApply,
	travelAuditList,
	travelMyList,
	travelDetailAudit
});
