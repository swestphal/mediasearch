import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/MovieDB';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

require('dotenv').config();
/* class based component, because it holds different states of application */

class App extends React.Component {
  constructor(props) {
    super(props);

    // to rerender itself when request is finished and state is set to its values
    this.state = { Movies: [], selectedMovie: null };
  }

  // api request is async operation -> interact with it either with async/await or promises
  onSearchSubmit = async (term) => {
    const response = await youtube.get(
      '/search/movie?query=' +
        term +
        '&api_key=ef67d4bf4b1a89a4d953e5f442b812d9&language=de-DE&region=DE&total_results=10'
    );
    this.setState({ Movies: response.data.results });
  };

  // new callback method -> arrow function because of the callback and "this"
  // and pass as a prop down to Movie list
  // Movie list pass down to item
  // on click on item we invoke that callback
  onMovieSelect = (Movie) => {
    this.setState({ selectedMovie: Movie });
  };

  render() {
    console.log(this.state.Movies);
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <MovieDetail Movie={this.state.selectedMovie} />
            </div>
            <div className="five wide column">
              <MovieList
                Movies={this.state.Movies}
                onMovieSelect={this.onMovieSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
