import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
require('dotenv').config();
/* class based component, because it holds different states of application */

class App extends React.Component {
  constructor(props) {
    super(props);

    // to rerender itself when request is finished and state is set to its values
    this.state = { videos: [] };
  }

  // api request is async operation -> interact with it either with async/await or promises
  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      q: term,
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div>
        App
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h3>Found {this.state.videos.length} videos</h3>
      </div>
    );
  }
}

export default App;
