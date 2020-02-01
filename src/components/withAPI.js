import React, { Component } from 'react';
import fetchSearchResults from '../api/search';

const withAPI = Content => {
  class Container extends Component {
    state = {
      result: [],
      query: '',
    };

    componentDidMount() {
      this.getQuery();
      this.fetchResults();
    }

    componentDidUpdate(prevProps, prevState) {
      this.getQuery();

      if (this.state.query && this.state.query !== prevState.query) {
        this.fetchResults();
      }
    }

    getQuery = () => {
      const { query } = this.state;
      const urlSearchParams = new URLSearchParams(window.location.search);
      const q = urlSearchParams.get('q');

      if (query === q) {
        return null;
      }

      this.setState({ query: urlSearchParams.get('q') });
    };

    fetchResults = () => {
      const { query } = this.state;
      if (!query) {
        this.setState({ result: [] });
        return null;
      }

      fetchSearchResults(query).then(result => {this.setState({ result }); });
    };

    render() {
      return <Content {...{ ...this.props, ...this.state }} />;
    };
  }

  Container.displayName = `withAPI(${Content.displayName || Content.name})`;

  return Container;
};

export default withAPI;
