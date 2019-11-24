import React, { Component } from 'react';
import MoviesList from './List';

import './styles.css';

const initialState = {
  movies: ['Appaloosa', "Il était une fois dans l'Ouest", '3h10 pour Yuma'],
  loading: false,
  error: false
};

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  setLoadingState() {
    this.setState({ ...initialState, loading: true });
  }

  setNominalState() {
    this.setState({ ...initialState });
  }

  setEmptyState() {
    this.setState({ ...initialState, movies: [] });
  }

  setErrorState() {
    this.setState({ ...initialState, error: true });
  }

  render() {
    const { error, loading, movies } = this.state;
    return (
      <div className="demo">
        <div className="list">
          <div className="title">Mes western préférés</div>
          <MoviesList error={error} loading={loading} movies={movies} />
        </div>
        <div className="controls">
          <button type="button" onClick={this.setLoadingState.bind(this)}>
            Loading
          </button>
          <button type="button" onClick={this.setErrorState.bind(this)}>
            Error
          </button>
          <button type="button" onClick={this.setNominalState.bind(this)}>
            Nominal
          </button>
        </div>
      </div>
    );
  }
}

export default Demo;
