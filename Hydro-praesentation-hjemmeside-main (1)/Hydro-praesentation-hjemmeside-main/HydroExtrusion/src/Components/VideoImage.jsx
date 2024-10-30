import React from 'react';
import PropTypes from 'prop-types';

const VideoImage = ({ imgOrVid, src, type }) => {
  if (imgOrVid == 'vid') {
    return (
      <div className="videoContainer">
        <video controls width="90%" src={src}>
          Your browser does not support the video tag.</video>
      </div>
    );
  } else if(imgOrVid == 'img') {
    return (
      <center><img src={src} alt={`Media file ${src}`} className="videoContainer" style={{ width: '80vw' }} /></center>);
  }
};

export default VideoImage;