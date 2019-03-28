import React from 'react';
import {Container,
        Row,
        Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const relatedVideo = ({ relatedVideo }) => {
  const metaData = relatedVideo.map((serchedItem) => {
    return (
          <Link to={`/SinglePage/${serchedItem.id.videoId}`} key={serchedItem.etag}>
            <Row>
              <Col xs={6} md={4} sm={4}>
                <img src={serchedItem.snippet.thumbnails.default.url} alt="video" />
              </Col>
              <Col xs={12} md={8} sm={8}>
                <p>{serchedItem.snippet.title}</p>
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
export default relatedVideo;
