import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.article`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ItemLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  color: #46505a;
  text-decoration: none;
  @media (max-width: 768px) {
    flex-flow: row nowrap;
  }
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
 }
`;

const Preview = styled.figcaption`
  margin: 1rem auto;
`;

const Image = styled.img`
  marfin: 0 auto;
  &:focus, &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
 }
`;
const VideoDescription = styled.div`
  margin: 1rem;
  > h2 {
    padding-bottom: 1rem;
    font-size: 2rem;
  }
  > p {
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const SearchResults = ({ videoItems }) => {
  const metaData = videoItems.map((serchedItem) => {
    return (
        <Item key={serchedItem.etag}>
          <ItemLink to={`/SinglePage/${serchedItem.id.videoId}`}>
            <Preview>
              <Image src={serchedItem.snippet.thumbnails.medium.url} alt="video" />
            </Preview>
            <VideoDescription>
              <h2>{serchedItem.snippet.title}</h2>
              <p>{serchedItem.snippet.description}</p>
            </VideoDescription>
          </ItemLink>
        </Item>
      )
    }
  );
  return (
      <Fragment>
        {metaData}
      </Fragment>
  );
}

export default SearchResults;
