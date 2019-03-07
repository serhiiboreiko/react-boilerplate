// React
import React from 'react';

// React router
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import FirstPage from 'src/components/FirstPage/Loadable';
import SecondPage from 'src/components/SecondPage/Loadable';
import NotFound from 'src/components/NotFound/Loadable';

export default () => (
  <Switch>
    <Route exact path="/first-page" component={FirstPage} />
    <Route exact path="/second-page" component={SecondPage} />
    <Redirect exact from="/" to="/first-page" />
    <Route path="*" component={NotFound} />
  </Switch>
);
