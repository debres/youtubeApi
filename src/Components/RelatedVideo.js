import React, { Fragment } from 'react';
import {Row,
        Col} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RelatedVideo = styled.article`
  
`;

const relatedVideo = ({ relatedVideo }) => {
  console.log('this related videos', relatedVideo);
  const metaData = relatedVideo.map((serchedItem) => {
    return (
      <RelatedVideo key={serchedItem.etag}>
          <Link to={`/SinglePage/${serchedItem.id.videoId}`}>
            <Row>
              <Col md={4} sm={4}>
                <img src={serchedItem.snippet.thumbnails.default.url} alt={serchedItem.snippet.title} />
              </Col>
              <Col md={8} sm={8}>
                <p>{serchedItem.snippet.title}</p>
              </Col>
            </Row>
          </Link>
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
