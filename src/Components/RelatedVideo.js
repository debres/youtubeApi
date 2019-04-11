import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RelatedVideo = styled.article`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ItemLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  color: #46505a;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
 }
`;

const Preview = styled.figcaption`
  margin: 1rem;
`;

const Image = styled.img`
  marfin: 0 auto;
  &:focus, &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
 }
`;
const VideoText = styled.div`
  margin: 1rem;
  > h3 {
    padding-bottom: 1rem;
    font-size: 2rem;
  }
`;

const RelatedVideos = ({ relatedVideo }) => {
  console.log('this related videos', relatedVideo);
  const metaData = relatedVideo.map((serchedItem) => {
    return (
      <RelatedVideo key={serchedItem.etag}>
          <ItemLink to={`/SinglePage/${serchedItem.id.videoId}`}>
            <Preview>
              <Image src={serchedItem.snippet.thumbnails.default.url} alt={serchedItem.snippet.title} />
            </Preview>
            <VideoText>
              <h3>{serchedItem.snippet.title}</h3>
            </VideoText>
          </ItemLink>
      </RelatedVideo>
      )
    }
  );
  return (
      <Fragment>
        {metaData}
      </Fragment>
  );
}
export default RelatedVideos;
