import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  	params: {
		"outlineType": 12
	},
	ajaxUrl: "/api/trip/getMyOutlineList",
	isEnd: false,
	list: [],
	currentIndex: 1
};

function getList(){
	let params = Object.assign({}, this.state.params, { pageNum: this.state.currentIndex, pageSize: 10 });
	return Ajax.post(this.state.ajaxUrl, params, 1).then(data => {
		this.state.list = this.state.list.concat(data.data.list || []);
		this.state.isEnd = data.data.isEnd;
		this.state.currentIndex ++;
		this.setState(this.state);
	}, err => {
		this.state.isEnd = true;
		this.setState(this.state);
	});
}

function handler(state = initialState, action) {
	switch (action.type) {
        case ActionTypes.ON_REFRESH: {
        	
        	return Object.assign({}, state, {
        		
        	})
        }
        default:
            return state;
    }
}

export default handler
