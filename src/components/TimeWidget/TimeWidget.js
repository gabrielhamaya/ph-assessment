import moment from 'moment';

import React, { Component } from 'react';
import './TimeWidget.css';

// import * as actions from '../../store/actions/index';

class TimeWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: moment().format('dddd, MMMM Do YYYY, h:mm:ss a') });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.time);
  }

  render() {
    return <div className="Time">{this.state.time}</div>;
  }
}

export default TimeWidget;
