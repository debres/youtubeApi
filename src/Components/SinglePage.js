import React from 'react';
import RelatedVideoContainer from '../Containers/RelatedVideoContainer';
import CommentsContainer from '../Containers/CommentsContainer';

function SinglePage(props) {
  return (
    <section>
      <section>
        <iframe width="640" height="420"
                src={`https://www.youtube.com/embed/${props.id}`}
                frameBorder="0"
                allowFullScreen
                title='title'>
        </iframe>
      </section>
      <section>
        <RelatedVideoContainer id={props.id}/>
      </section>
      <section>
        <CommentsContainer id={props.id}/>
      </section>
    </section>
  )
}

export default SinglePage;
