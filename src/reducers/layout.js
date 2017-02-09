import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  app: ""
};

function handler(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_TITLE: {
            return Object.assign({},state,{
                app: action.app
            })
        }
        default:
            return state;
    }
}

export default handler
