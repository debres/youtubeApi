import React from 'react';
import styled from 'styled-components';

function VideoPlayer({className, id, videoStatistics}) {
  console.log(videoStatistics)
  return (
    <article className={className}>
      <div>
      <iframe width="480"
              height="320"
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allowFullScreen
              title='title' />
      </div>
      <>
        {videoStatistics !== null
                         ? videoStatistics.map((item) => {
                           return (
                              <section className="statistics" key={item.etag}>
                                  <h2>{item.snippet.title}</h2>
                                  <hr />
                                  <span>Commented times: {item.statistics.commentCount}</span>
                                  <span>Dislicked times: {item.statistics.dislikeCount}</span>
                                  <span>Licked times: {item.statistics.likeCount}</span>
                                  <span>Viewed times: {item.statistics.viewCount}</span>
                                  <hr />
                                  <p>{item.snippet.description}</p>
                                </section>
                              )
                            })
                         : <p>Statistics is null</p>}
      </>
    </article>
  )
}

const StyledVideoPlayer = styled(VideoPlayer)`
  margin-bottom: min;
  min-height: 600px;
  div {
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
  .statistics {
    
  }
`;

export default StyledVideoPlayer;
