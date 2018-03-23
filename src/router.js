import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/ProductList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {/*<Link to="/products">products</Link>*/}
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" component={Products} />
      </Switch>

    </Router>
  );
}

export default RouterConfig;
