import React from 'react';
import styled from 'styled-components';

const CommentsContainer = styled.section`

`;

const Comment = styled.section`
  border-bottom: 1px solid #e6e8eb;
`;

const Author = styled.div`

`;

const CommentBody = styled.div`

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
        <CommentBody>
          <p>Commented at: {serchedItem.snippet.topLevelComment.snippet.publishedAt.toString()}</p>
          <p>{serchedItem.snippet.topLevelComment.snippet.textDisplay}</p>
        </CommentBody>
      </Comment>
      )
    }
  );
  return (
      <CommentsContainer>
        {metaData}
      </CommentsContainer>
  );
}
export default Comments;
