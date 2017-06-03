import React from 'react';

// const VideoListItem = (prop) => {
const VideoListItem = ({video, onVideoSelect}) => {
  // console.log(prop);
  // const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;

  // console.log(imageUrl);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-objec"/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
