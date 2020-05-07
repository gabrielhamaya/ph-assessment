import moment from 'moment';

import React, { Component } from 'react';

// import * as actions from '../../store/actions/index';

class TimeWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment().format() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.time);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default TimeWidget;
