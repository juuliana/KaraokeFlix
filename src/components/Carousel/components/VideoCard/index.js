import React, { useCallback, useState } from 'react';
import { debounce } from "lodash";
import { VideoCardContainer, VideoCardContainerDiv, ResponsiveIframe, VideoCardWrapper } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const [isHovering, setIsHovering] = useState(false);
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  
  const getEmbedVideo = () => {
    setIsHovering(true);
  };

  const delayEmbed = useCallback(debounce(getEmbedVideo, 3000), []);
  
  const teste = () => {
    delayEmbed.cancel();
    setIsHovering(false);
  };

  return (
    <>
      <VideoCardWrapper onMouseEnter={delayEmbed} onMouseLeave={teste}>
        {(!isHovering && (
          <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || "red" }}
            title={videoTitle}
          />
        )) || (
          <VideoCardContainerDiv
            style={{ borderColor: categoryColor || "red" }}
          >
            <ResponsiveIframe
              title="Titulo do Iframe"
              src={`https://www.youtube.com/embed/${getYouTubeId(
                videoURL
              )}?autoplay=1&mute=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoCardContainerDiv>
        )}
      </VideoCardWrapper>
    </>
  );
}