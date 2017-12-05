import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyATJN6kGNOxlU06GL27wQwoMQICvWcXTuc';

// create new components, produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //update with new video
      this.setState({ videos });
      // en es6 === this.setState({ videos: videos }); car key value même valeur
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// put this component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));