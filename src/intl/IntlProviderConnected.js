// React
import React, { Component } from 'react';

// Helpers
import flattenMessages from 'src/helpers/intl/flattenMessages';

// Intl
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';

// Messages
import messages from './messages';

// addLocaleData([...en, ...uk]);
addLocaleData(en);

const LOCALE = 'en-US';

class IntlProviderConnected extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { children } = this.props;

    return (
      <IntlProvider
        key={LOCALE}
        locale={LOCALE}
        messages={flattenMessages(messages[LOCALE])}
      >
        {children}
      </IntlProvider>
    );
  }
}

export default IntlProviderConnected;
