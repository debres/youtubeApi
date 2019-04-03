import React from 'react';
import {Container,
        Row,
        Col,
        Image } from 'react-bootstrap';
import styled from 'styled-components';

const Comment = styled.section`
  border-bottom: 1px solid #e6e8eb;
`;

const comments = ({ relatedComments }) => {
  console.log('this related comments is', relatedComments);
  const metaData = relatedComments.map((serchedItem) => {
    return (
            <Comment key={serchedItem.etag}>
              <Row>
                <Col>
                  <Image roundedCircle  src={serchedItem.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="author" />
                  <h2>{serchedItem.snippet.topLevelComment.snippet.authorDisplayName}</h2>
                </Col>
                <Col>
                  <p>{serchedItem.snippet.topLevelComment.snippet.textDisplay}</p>
                  <p>Commented at: {serchedItem.snippet.topLevelComment.snippet.publishedAt.toString()}</p>
                </Col>
              </Row>
            </Comment>
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
