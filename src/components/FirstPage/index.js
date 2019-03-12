import React, { Component } from 'react';

import Input from 'src/components/shared/Form/Input';

class FirstPage extends Component {
  state = {
    input: '',
  };

  onChange = (event) => {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        Your value:
        <Input value={input} onChange={this.onChange} />
      </div>
    );
  }
}

export default FirstPage;
