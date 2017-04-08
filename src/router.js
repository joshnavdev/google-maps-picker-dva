import React from 'react';
import { Router, Route } from 'dva/router';
import mapPage from './routes/mapPage';

const RouterConfig = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={mapPage} />
    </Router>
  );
};

export default RouterConfig;

