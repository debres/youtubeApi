import React from 'react';
import { Link } from 'react-router-dom';
import {Container,
        Row,
        Col} from 'react-bootstrap';
import styled from 'styled-components';

const Item = styled.article`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e6e8eb;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Itemlink = styled(Link)`
  color: #46505a;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
 }
`;

const Image = styled.img`
  alighn-self: center;
  &:focus, &:hover {
      border-radius: 3rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
 }
`;

const Title = styled.h2`
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6e8eb;
  font-size: 2rem;
`;

const Description = styled.p`
  padding-bottom: 1rem;
  font-size: 1.5rem;
`;

const searchResults = ({ videoItems }) => {
  const metaData = videoItems.map((serchedItem) => {
    return (
        <Item key={serchedItem.etag}>
          <Itemlink to={`/SinglePage/${serchedItem.id.videoId}`}>
            <Row>
              <Col xs={4} md={4}>
                <figcaption>
                  <Image src={serchedItem.snippet.thumbnails.medium.url} alt="video" />
                </figcaption>
              </Col>
              <Col xs={12} md={8}>
                <Title>{serchedItem.snippet.title}</Title>
                <Description>{serchedItem.snippet.description}</Description>
              </Col>
            </Row>
          </Itemlink>
        </Item>
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
