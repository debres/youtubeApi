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
  padding: 0 1.5rem;
  max-width: 75rem;
  .autor {
    display: flex;
    align-items: center;
    img {
      margin-right: 2rem;
      border-radius: 50%;
    }
  }
  .comment {
    padding: 0 1.5rem;
    p {
      margin-bottom: 1rem;
    }
  }
`;

export default StyledComments;
