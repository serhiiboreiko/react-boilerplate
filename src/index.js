// Absolute imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Styles
import 'src/styles/fonts.css';
import 'src/styles/index.css';
import theme from 'src/styles/theme';

// Redux store
import store from './store/configureStore';

// Components
import App from './App';
import IntlProviderConnected from './intl/IntlProviderConnected';

ReactDOM.render(
  <Provider store={store}>
    <IntlProviderConnected>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </IntlProviderConnected>
  </Provider>,
  window.document.getElementById('root'),
);
