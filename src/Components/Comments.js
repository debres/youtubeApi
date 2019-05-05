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

function Comments({ commentItems }) {
  return (
      <CommentsContainer>
        {commentItems !== null
                      ? commentItems.map((serchedItem) => {
                          return (
                            <Comment key={serchedItem.etag}>
                              <Author>
                                <img src={serchedItem.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="author" />
                                <h3>{serchedItem.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                              </Author>
                              <CommentBody>
                                <p>Commented at: {serchedItem.snippet.topLevelComment.snippet.publishedAt.toLocaleString()}</p>
                                <p>{serchedItem.snippet.topLevelComment.snippet.textDisplay}</p>
                              </CommentBody>
                            </Comment>
                          );
                        })
                      : <div>Spiner....</div>}
      </CommentsContainer>
  );
}
export default Comments;
