import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SearchResults({ className, videoItems }) {
  return (
    <section className={className}>
      {videoItems !== null
                  ? videoItems.map((serchedItem) => {
                      return (
                        <article key={serchedItem.etag}>
                          <Link to={`/SinglePage/${serchedItem.id.videoId}`}>
                              <figcaption>
                                <img src={serchedItem.snippet.thumbnails.medium.url} alt="video" />
                              </figcaption>
                              <section>
                                <h3>{serchedItem.snippet.title}</h3>
                                <hr />
                                <p>{serchedItem.snippet.description}</p>
                              </section>
                          </Link>
                        </article>
                      );
                    })
                  : <h2>You have to paste something....</h2>}
    </section>
  )
}

const StyledSearchResults = styled(SearchResults)`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  display: grid;
  grid-row-gap: 2em;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    a {
      grid-template-rows: auto;
      grid-template-columns: 1fr 2fr;
      section > h3 {
        font-size: 2rem
        text-align: left;
      }
      section > p {
        font-size: 1.5rem;
      }
    }
  }
  h2 {
    text-align: center;
    font-family: 'Oswald', sans-serif;
    @madia(min-width: 768px) {

    }
  }
  article {
    position: relative;
    width: 100%;
    min-height: 12rem;
    a {
      display: grid;
      text-decoration: none;
      color: black;
      @media (min-width: 1024px) {
        grid-template-rows: auto;
        grid-template-columns: 1fr 2fr;
      }
      figcaption {
        margin: 0 auto;
        img {
          margin: 0 auto;
        }
      }
      section > h3 {
        margin-bottom: 1rem;
        text-align: center;
        font-family: 'Oswald', sans-serif;
        font-size: 1rem;
        @media (min-width: 1024px) {
          font-size: 2rem
          text-align: left;
        }
      }
      section > p {
        margin-bottom: 1rem;
        font-family: 'Lato', sans-serif;
        font-size: 0.7rem;
        @media (min-width: 1024px) {
          font-size: 1.5rem;
        }
      }
    }
  }
}`;

export default StyledSearchResults;
