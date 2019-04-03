import React from 'react';
import {Container,
        Row,
        Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const relatedVideo = ({ relatedVideo }) => {
  console.log('this related videos', relatedVideo);
  const metaData = relatedVideo.map((serchedItem) => {
    return (
          <Link to={`/SinglePage/${serchedItem.id.videoId}`} key={serchedItem.etag}>
            <Row>
              <Col md={4} sm={4}>
                <img src={serchedItem.snippet.thumbnails.default.url} alt={serchedItem.snippet.title} />
              </Col>
              <Col md={8} sm={8}>
                <p>{serchedItem.snippet.title}</p>
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
