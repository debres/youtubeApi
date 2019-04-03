import React from 'react';
import { Link } from 'react-router-dom';
import {Container,
        Row,
        Col} from 'react-bootstrap';
import styled from 'styled-components';

const Title = styled.h2`
  padding-bottom: 15px;
  font-size: 32px;
`;

const Description = styled.p`
  padding-bottom: 10px;
  font-size:20px;
`;

const searchResults = ({ videoItems }) => {
  const metaData = videoItems.map((serchedItem) => {
    return (
          <Link to={`/SinglePage/${serchedItem.id.videoId}`} key={serchedItem.etag}>
            <Row>
              <Col xs={4} md={4}>
                <img src={serchedItem.snippet.thumbnails.medium.url} alt="video" />
              </Col>
              <Col xs={12} md={8}>
                <Title>{serchedItem.snippet.title}</Title>
                <Description>{serchedItem.snippet.description}</Description>
              </Col>
            </Row>
          </Link>
      )
    }
  );
  return (
      <Container>
        {metaData}
      </Container>
  );
}
export default searchResults;
