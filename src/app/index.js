/**
 * Created by @qingmeng on 17/1/23
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import FastClick from 'fastclick'

//*************补丁**************
import 'whatwg-fetch';
import Es6Promise from 'es6-promise';
import Es6ObjectAssign from 'es6-object-assign';
// import 'core/polyfill';

Es6Promise.polyfill();
Es6ObjectAssign.polyfill();
FastClick.attach(document.body);


//*************样式加载**************
// import 'normalize.css';//样式引入
import 'weui/dist/style/weui.css';
import 'style/app.scss';//样式引入

import routes from './routes';
import configureStore from './store';

const store = configureStore();

render((
  <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
  </Provider>
), document.getElementById('appWrapper'));
