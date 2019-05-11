import React from 'react';
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap';

function Comments({ className, commentItems }) {
  console.log('this comments items', commentItems)
  return (
      <section className={className}>
        {commentItems !== null
                      ? commentItems.map((serchedItem) => {
                          return (
                            <section key={serchedItem.etag}>
                              <section className="autor">
                                <img src={serchedItem.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="author" />
                                <h3>{serchedItem.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                              </section>
                              <section className="comment">
                                <hr />
                                  <p>{serchedItem.snippet.topLevelComment.snippet.textDisplay}</p>
                                <hr />
                                <p>Licked times: {serchedItem.snippet.topLevelComment.snippet.likeCount}</p>
                              </section>
                            </section>
                          );
                        })
                      : <Spinner />}
      </section>
  );
}

const StyledComments = styled(Comments)`
  margin-bottom: 1rem;
  border-top: 1px solid black;
  .autor {
    display: flex;
  }
`;

export default StyledComments;
