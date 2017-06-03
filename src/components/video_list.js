import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videiItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });
  // console.log(videiItems);
  return (
    <ul className="col-md-4 list-group">
      {/* {props.videos.length} */}
      {videiItems}
    </ul>
  );
}

export default VideoList;
