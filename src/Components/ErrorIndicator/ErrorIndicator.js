import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.section`
  margin: 1rem auto;
`;

const Logo = styled(Link)`
  display: block;
  color: #46505a;
  text-decoration: none;
  trasition-property: color;
  transition-duration: 0.2s;
  > h1 {
    margin-bottom: 1rem;
    font-family: 'Lobster', cursive;
    font-size: 3rem;
  }
  &:hover, &:link {
    color: red;
    text-decoration: none;
   }
`;

const ErrorIndicator = () => {
  return (
    <ErrorContainer>
      <Logo to="/" >
        <h1>youtubeApi</h1>
      </Logo>
    </ErrorContainer>
  )
}

export default ErrorIndicator;
