import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContaier = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 480px) {
    flex-flow: column nowrap;
  }

  @media (width-width: 768px) {
    flex-flow: column nowrap;
  }

  @media (max-width: 1200px) {
    flex-flow: column nowrap;
  }
`;

const ItemLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:focus, &:hover, &:link, &:active {
      text-decoration: none;
 }
`;

const Item = styled.article`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Preview = styled.figcaption`
  margin: 1rem auto;
  > img {
    marfin: 0 auto;
    &:focus, &:hover {
        box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
   }
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
      <ItemLink to={`/SinglePage/${serchedItem.id.videoId}`}>
        <Item key={serchedItem.etag}>
          <Preview>
            <img src={serchedItem.snippet.thumbnails.medium.url} alt="video" />
          </Preview>
          <VideoDescription>
            <h2>{serchedItem.snippet.title}</h2>
            <p>{serchedItem.snippet.description}</p>
          </VideoDescription>
        </Item>
      </ItemLink>
      )
    }
  );
  return (
      <SearchContaier>
        {metaData}
      </SearchContaier>
  );
}

export default SearchResults;
