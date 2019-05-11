import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap'

function RelatedVideos({ className, relatedVideoItems }) {
  console.log(relatedVideoItems);
  return (
      <section className={className}>
        {relatedVideoItems  !== null
                            ? relatedVideoItems.map((serchedItem) => {
                                return (
                                  <Link to={`/SinglePage/${serchedItem.id.videoId}`} key={serchedItem.etag}>
                                    <article className="crad middle">
                                      <figcaption className="front">
                                        <img src={serchedItem.snippet.thumbnails.medium.url} alt={serchedItem.snippet.title} />
                                      </figcaption>
                                      <section className="back">
                                        <div className="backContent middle">
                                          <h3>{serchedItem.snippet.title}</h3>
                                        </div>
                                      </section>
                                    </article>
                                  </Link>
                                );
                              })
                            : <Spinner />}
      </section>
  );
}

const StyledRelatedVideos = styled(RelatedVideos)`
  margin-bottom: 1rem;
  width: 320px;
  display: grid;
  grid-template-rows: auto;
  a {
    position: relative;
    width: 320px;
    height: 180px;
    margin-bottom: 1rem;
    color: #46505a;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    .middle{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .crad {
      width: 320px;
      height: 180px;
    }
    .front, .back {
      width: 100%;
      height: 100%;
      overflow: hidden;
      backface-visibility: hidden;
      position: absolut;
      transition: transform .5s linear;
    }
    .front img {
      height: 100%;
    }
    .front {
      transform: perspective(600px) rotateY(180deg);
    }
    .back {
      transform: perspective(600px) rotateY(0deg);
    }
    .crad:hover > .front {
      transform: perspective(600px) rotateY(0deg);
    }
    .crad:hover > .back {
      transform: perspective(600px) rotateY(0deg);
    }
  }
`;

export default StyledRelatedVideos;
