import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.section`
  margin: 1rem auto;
`;

const Logo = styled(Link)`
  display: block;
  padding: 1rem;
  color: #46505a;
  text-decoration: none;
  > h1 {
    margin-bottom: 1rem;
    font-family: 'Lobster', cursive;
    text-align: center;
    font-size: 3rem;
  }
  &:focus, &:hover, &:visited, &:link, &:active {
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
