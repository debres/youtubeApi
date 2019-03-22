import React, { Fragment } from 'react';
import {Container,
        Row,
        Col} from 'react-bootstrap';

const searchResults = ({ videoList }) => {
  const metaData = videoList.map((serchedItem) => {
    return (
        <Fragment>
          <Row>
            <Col xs={3} md={2}>
              <img src={serchedItem.snippet.thumbnails.default.url} alt="video" />
            </Col>
            <Col xs={12} md={8}>
              <h2>{serchedItem.snippet.title}</h2>
              <p>{serchedItem.snippet.title.publishedAt}</p>
              <p>{serchedItem.snippet.description}</p>
            </Col>
            <Col xs={3} md={2}>

            </Col>
          </Row>
        </Fragment>
      );
    }
  )
  return (
      <Container>
        {metaData}
      </Container>
  );
}
export default searchResults;
