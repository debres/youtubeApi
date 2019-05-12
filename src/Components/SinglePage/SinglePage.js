import React from 'react';
import styled from 'styled-components';
import VideoPlayerContainer from '../../Containers/VideoPlayerContainer';
import RelatedVideoContainer from '../../Containers/RelatedVideoContainer';
import CommentsContainer from '../../Containers/CommentsContainer';

function SinglePage({className, id}) {
  return (
    <main className={className}>
      <div>
        <VideoPlayerContainer id={id}/>
      </div>
      <aside>
        <RelatedVideoContainer id={id}/>
      </aside>
      <section>
        <CommentsContainer id={id}/>
      </section>
    </main>
  )
}

const StyledSinglePage = styled(SinglePage)`
  margin: 0 auto;
  display: grid;
  grid-template-areas:
  "player"
  "aside"
  "comment";

  @media (min-width: 768px) {
    margin: 0 2rem;
    display: grid;
    justify-items: center;
    grid-template-rows: auto;
    grid-template-columns: auto, 320px;
    grid-gap: 2rem;
    grid-template-areas:
    "player  aside"
    "comment aside";
  }
  div {
    grid-area: player;
  }
  aside {
    margin: 0 auto;
    grid-area: aside;
  }
  section {
    grid-area: comment;
  }
`;

export default StyledSinglePage;
