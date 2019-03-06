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

    console.log(process.env.JAVA_API);

    return (
      <Text>
        First page $
        {number}
      </Text>
    );
  }
}

export default FirstPage;
