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

    this.props.onSearch(
      this.props.apiKey,
      this.props.authToken,
      this.state.query
    );
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
    authToken: state.auth.accessToken,
    apiKey: state.vid.apiKey,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (apiKey, accessToken, query) =>
      dispatch(actions.seachVideo(apiKey, accessToken, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
