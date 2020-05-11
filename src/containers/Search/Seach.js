import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Video from '../../components/Video/Video';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  searchHandler = (event) => {
    event.preventDefault();

    this.props.onSearch(this.props.apiKey, this.state.query);
    console.log(this.state.query);
  };

  onChange = (event) => {
    this.setState({ query: event.target.value });
    console.log(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.searchHandler}>
        <input type="text" placeholder="Search..." onChange={this.onChange} />
        <button type="submit">Go!</button>
        <br />
        <Video />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiKey: state.vid.apiKey,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (apiKey, query) => dispatch(actions.seachVideo(apiKey, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
