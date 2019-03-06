// React & Redux
import React from 'react';
import { hot } from 'react-hot-loader/root';

// React router
import { BrowserRouter } from 'react-router-dom';

// Components
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default hot(App);
