import React from 'react';
import styled from 'styled-components';

function VideoPlayer({className, id, videoStatistics}) {
  return (
    <section className={className}>
      <figcaption>
      <iframe width="480"
              height="320"
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allowFullScreen
              title='title' />
      </figcaption>
      <>
        {videoStatistics !== null
                         ? videoStatistics.map((item) => {
                           return (
                              <article key={item.etag}>
                                  <h2>{item.snippet.title}</h2>
                                  <hr />
                                  <span>Commented times: {item.statistics.commentCount}</span>
                                  <span>Dislicked times: {item.statistics.dislikeCount}</span>
                                  <span>Licked times: {item.statistics.likeCount}</span>
                                  <span>Viewed times: {item.statistics.viewCount}</span>
                                  <hr />
                                  <p>{item.snippet.description}</p>
                                </article>
                              )
                            })
                         : <p>Statistics is null</p>}
      </>
    </section>
  )
}

const StyledVideoPlayer = styled(VideoPlayer)`
  margin-bottom: min;
  min-height: 600px;
  figcaption {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  article {
    max-width: 75rem;
  }
`;

export default StyledVideoPlayer;
