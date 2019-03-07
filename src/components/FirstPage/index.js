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
        <Icon />
      </Text>
    );
  }
}

export default FirstPage;
