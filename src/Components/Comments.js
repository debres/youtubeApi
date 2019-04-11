import React, { Fragment } from 'react';
import styled from 'styled-components';

const Comment = styled.section`
  border-bottom: 1px solid #e6e8eb;
`;

const Author = styled.div`

`;

const AuthorsComment = styled.div`

`;

const Comments = ({ relatedComments }) => {
  console.log('this related comments is', relatedComments);
  const metaData = relatedComments.map((serchedItem) => {
    return (
      <Comment key={serchedItem.etag}>
        <Author>
          <img src={serchedItem.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="author" />
          <h3>{serchedItem.snippet.topLevelComment.snippet.authorDisplayName}</h3>
        </Author>
        <AuthorsComment>
          <p>Commented at: {serchedItem.snippet.topLevelComment.snippet.publishedAt.toString()}</p>
          <p>{serchedItem.snippet.topLevelComment.snippet.textDisplay}</p>
        </AuthorsComment>
      </Comment>
      )
    }
  );
  return (
      <Fragment>
        {metaData}
      </Fragment>
  );
}
export default Comments;
