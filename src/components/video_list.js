import React from 'react';
import VideoListItem from './video_list_items';

const VideoList = (props) => {
  /* for each video may to rendering a list of data for react => add unique key prop 
  use 'etag' of google object api to add our key*/
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;