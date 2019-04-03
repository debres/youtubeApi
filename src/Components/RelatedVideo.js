import React, { Fragment } from 'react';
import {Row,
        Col} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedVideo = styled.article`
  margin-bottom: 1rem;
`;

const LinkItem = styled(Link)`

`;

const Image = styled.img`

`;

const Title = styled.p`

`;

const relatedVideo = ({ relatedVideo }) => {
  console.log('this related videos', relatedVideo);
  const metaData = relatedVideo.map((serchedItem) => {
    return (
      <RelatedVideo key={serchedItem.etag}>
          <LinkItem to={`/SinglePage/${serchedItem.id.videoId}`}>
            <Row>
              <Col md={4} sm={4}>
                <Image src={serchedItem.snippet.thumbnails.default.url} alt={serchedItem.snippet.title} />
              </Col>
              <Col md={8} sm={8}>
                <Title>{serchedItem.snippet.title}</Title>
              </Col>
            </Row>
          </LinkItem>
      </RelatedVideo>
      )
    }
  );
  return (
      <Fragment>
        {metaData}
      </Fragment>
  );
}
export default relatedVideo;
