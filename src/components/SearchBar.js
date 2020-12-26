import React from 'react';
import styles from '../styles/SearchBar.module.scss';

class SearchBar extends React.Component {
  /* controlled input - because we want to be sure to store data inside the component and not in the dom */

  state = { term: '' };

  onChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // todo: call callback from parent component
  };
  render() {
    return (
      <div className="container ui segment">
        <div className={`${styles.SearchBar} `}>
          <form onSubmit={this.onSubmit} className="ui form">
            <div className="field">
              <label htmlFor="">Video Search</label>
              <input
                type="text"
                value={this.state.term}
                onChange={this.onChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
