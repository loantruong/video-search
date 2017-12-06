import React, { Component } from 'react';

//class component
class SearchBar extends Component {
  //method function
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  //method function
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//refrence to component to declare connecion between
export default SearchBar;