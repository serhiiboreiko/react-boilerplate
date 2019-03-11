import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from 'src/assets/icons/add.svg';

const Text = styled.span`
  color: ${props => props.theme.blue};

  & svg {
    width: 30px;
    height: 30px;

    & path { fill: red; }
  }
`;

class FirstPage extends Component {
  state = {
    number: 30,
  };

  onClick = () => {
    const { number } = this.state;

    this.setState({ number: number + 1 });
  }

  render() {
    const { number } = this.state;

    return (
      <Text>
        First Page #
        {number}
        <Icon />
        <button type="button" onClick={this.onClick}>
          click
        </button>
      </Text>
    );
  }
}

export default FirstPage;
