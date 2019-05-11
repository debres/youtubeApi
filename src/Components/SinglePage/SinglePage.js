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
    grid-template-rows: auto;
    grid-template-columns: auto, 320px;
    grid-gap: 2rem;
    grid-template-areas:
    "player  aside"
    "comment aside";
  }
  /*@media (min-width: 992px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, fit-content());
    grid-template-rows: fit-content();
    grid-gap: 2rem;
    grid-template-areas:
    "player  player aside"
    "comment comment aside"
  }*/
  div {
    grid-area: player;
    margin-bottom: 1rem;
  }
  aside {
    grid-area: aside;
    margin-bottom: 1rem;
  }
  section {
    grid-area: comment;
    margin-bottom: 1rem;
  }
`;

export default StyledSinglePage;
