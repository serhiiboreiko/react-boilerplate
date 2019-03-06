// React
import React, { Component } from 'react';

// Redux
// import { connect } from 'react-redux';

// Helpers
import flattenMessages from 'src/helpers/intl/flattenMessages';

// Intl
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';

// Messages
import messages from './messages';

addLocaleData([...en, ...uk]);

class IntlProviderConnected extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { user = { locale: 'en-US' }, children } = this.props;

    return (
      <IntlProvider
        key={user.locale}
        locale={user.locale}
        messages={flattenMessages(messages[user.locale])}
      >
        {children}
      </IntlProvider>
    );
  }
}

export default IntlProviderConnected;
