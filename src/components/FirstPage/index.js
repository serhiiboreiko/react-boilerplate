import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.span`
  color: ${props => props.theme.blue};
`;

class FirstPage extends Component {
  constructor(props) {
    super(props);

    this.state = { number: 1 };
  }

  render() {
    const { number } = this.state;

    return (
      <Text>
        First Page $
        {number}
      </Text>
    );
  }
}

export default FirstPage;
