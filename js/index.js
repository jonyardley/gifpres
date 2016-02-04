import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';

import App from './app';
import Start from './start';
import Play from './play';

import '../css/index.scss';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Start}/>
      <Route path="/play" component={Play}/>
    </Route>
  </Router>
), document.getElementById('app'));
