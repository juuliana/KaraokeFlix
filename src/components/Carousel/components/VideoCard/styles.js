import styled from "styled-components";

export const VideoCardWrapper = styled.div`
  transition: all 0.5s;
  &:hover,
  &:focus {
    transform: scale(1.5);
    margin: 0 80px;
  }
`;

export const VideoCardContainer = styled.a`
  --card-width: 298px;
  --card-height: 197px;
  border: 1px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 var(--card-width);
  width: var(--card-width);
  height: var(--card-height);
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardContainerDiv = styled.div`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;