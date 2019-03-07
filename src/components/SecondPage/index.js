import React, { Component } from 'react';
import dayjs from 'dayjs';

class SecondPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        second page
        {dayjs().format('YYYY MMM DD')}
      </div>
    );
  }
}

export default SecondPage;
