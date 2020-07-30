import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

let timer;
const startVideo = 3000;
let video;


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  
  const handleMouseEnter = (evt) => {
    video = evt.target;
    timer = setTimeout(() => {
      video.click();      
    }, startVideo);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
  };

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
