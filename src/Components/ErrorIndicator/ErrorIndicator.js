import React from 'react';
import styled from 'styled-components';

function ErrorIndicator(props) {
  const { className } = props;
  return (
    <section className={className}>
      <hgroup>
        <h1>youtubeApi</h1>
        <h2>Something whent wrong...</h2>
      </hgroup>
      <p>Please chek your internet connection and reload page.</p>
    </section>
  )
}

const StyledErrorIndicator = styled(ErrorIndicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  text-align: center;
  hgroup {
    display: block;
    color: #46505a;
    h1 {
      margin-bottom: 1rem;
      font-size: 3rem;
    }
    h2 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.5rem;
  }
`;

export default StyledErrorIndicator;
