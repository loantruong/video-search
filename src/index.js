import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyCJObz22kjps1ZSCyLXbKoxhPc-7OiN0fY';

// create new components, produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('bordeaux');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //update with new video
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    //create function do not refresh page when taping into search bar
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <h1 className="title">Video search</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div> // proprety can adding to videoList component
    );
  }
}

// put this component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));