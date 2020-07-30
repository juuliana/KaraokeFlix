import React from 'react';
import { Link } from 'react-router-dom';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';

import Slider, {SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
              <Link to='/Karoake'>
                <SliderItem key={video.titulo}>
                  <VideoCard
                    videoTitle={video.titulo}
                    videoURL={video.url}
                    categoryColor={categoryColor}
                  />
                </SliderItem>
              </Link>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;