import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  searchHandler = (event) => {
    event.preventDefault();

    this.props.onSearch(this.props.apiKey, this.state.query);
  };

  /* We build the query from this component and then same the query on the state so that we can load more videos with it */
  queryBuilder = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.searchHandler}>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.queryBuilder}
        />
        <button className="Go" type="submit">
          Go!
        </button>
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
