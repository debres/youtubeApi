import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap'

function RelatedVideos({ className, relatedVideoItems }) {
  return (
      <section className={className}>
        {relatedVideoItems  !== null
                            ? relatedVideoItems.map((serchedItem) => {
                                return (
                                  <Link to={`/SinglePage/${serchedItem.id.videoId}`} key={serchedItem.etag}>
                                    <article>
                                      <figcaption>
                                        <img src={serchedItem.snippet.thumbnails.medium.url} alt={serchedItem.snippet.title} />
                                      </figcaption>
                                      <section>
                                        <header>
                                          <img src={serchedItem.snippet.thumbnails.default.url} alt={serchedItem.snippet.title}/>
                                          <h3>{serchedItem.snippet.title}</h3>
                                        </header>
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
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 320px;
  display: grid;
  grid-template-rows: auto;
  @media(min-width: 640px) and (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  a {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    color: #46505a;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    article {
      width: 320px;
      height: 180px;
      figcaption {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        position: absolut;
        transition: transform .5s linear;
        transform: perspective(600px) rotateY(180deg);
        img {
          height: 100%;
        }
      }
      section {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        position: absolut;
        transition: transform .5s linear;
        transform: perspective(600px) rotateY(0deg);
        &:hover > section {
          transform: perspective(600px) rotateY(180deg);
        }
        header {
          position: absolute;
          top: -180px;
          display: flex;
        }
      }
      &:hover > figcaption {
        transform: perspective(600px) rotateY(0deg);
      }
      &:hover > section {
        transform: perspective(600px) rotateY(180deg);
      }
    }
`;

export default StyledRelatedVideos;
