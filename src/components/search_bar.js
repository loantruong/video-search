import React, { Component } from 'react';

//class component
class SearchBar extends Component {
  //method function
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  //method function
  render() {
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
      </div>
    )
  }
}

//refrence to component to declare connecion between
export default SearchBar;