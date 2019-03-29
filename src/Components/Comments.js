import React from 'react';
import {Container,
        Row,
        Col} from 'react-bootstrap';

const comments = ({ relatedComments }) => {
  const metaData = relatedComments.map((serchedItem) => {
    return (
            <Row key={serchedItem.etag}>
              <Col xs={6} md={4} sm={4}>
                <h2>{serchedItem.snippet.topLevelComment.snippet.authorDisplayName}</h2>
              </Col>
              <Col xs={12} md={8} sm={8}>
                <p>{serchedItem.snippet.topLevelComment.snippet.textDisplay}</p>
              </Col>
            </Row>
      )
    }
  );
  return (
      <Container>
        {metaData}
      </Container>
  );
}
export default comments;
