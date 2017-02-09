import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  activeArray: [],
  tabBarDataList: [],
  activeMenu: ""
};

function handler(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_NAVLIST: {
            let activeArray = [];
            action.navListData.map((item, index)=>{
                activeArray.push(item.key);
            });
            return Object.assign({},state,{
                tabBarDataList: action.navListData,
                activeArray
            })
        }
        case ActionTypes.SET_ACTIVEMENU: {
            return Object.assign({},state,{
                activeMenu: action.activeMenu
            })
        }
        default:
            return state;
    }
}

export default handler
