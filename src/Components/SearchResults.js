import React from 'react';
import {Container,
        Row,
        Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const searchResults = ({ videoItems }) => {
  const metaData = videoItems.map((serchedItem) => {
    return (
          <Link to={`/SinglePage/${serchedItem.id.videoId}`} key={serchedItem.etag}>
            <Row>
              <Col xs={4} md={4}>
                <img src={serchedItem.snippet.thumbnails.medium.url} alt="video" />
              </Col>
              <Col xs={12} md={8}>
                <h2>{serchedItem.snippet.title}</h2>
                <p>{serchedItem.snippet.description}</p>
                <p>{serchedItem.id.videoId}</p>
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
