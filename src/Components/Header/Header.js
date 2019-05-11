import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(props) {
  const { className } = props;
  return (
    <header className={className}>
      <div>
        <Link to="/">
          <h1>youtubeApi</h1>
        </Link>
        <form>
        <input
                type="search"
                value={props.surfing}
                placeholder="serch for videos..."
                onSubmit={() => props.formSubmitHendeler(props.surfing)}
                onChange={props.inputChangeHandeler}
                onKeyPress={props.keyPressHendeler} />
              <Link to="/"><button onClick={() => props.buttonClickHendeler(props.surfing)}>search</button></Link>
        </form>
      </div>
    </header>
  );
}

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0 1rem;
  margin-bottom: 2rem;
  min-height: 4rem;
  background-color: #fff;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
  div {
    margin: 0 auto;
    max-width: 75rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
    }
  }
  a {
    display: block;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #000;
    h1 {
      font-size: 2rem;
      font-family: 'Oswald', sans-serif;
    }
  }
form {
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  input {
    outline: none;
    margin: 0 auto;
    width: 35%;
    height: 2rem;
    border: 0;
    trasition-property: width;
    transition-duration: 1.2s;
    &::placeholder {
      font-family: 'Lato', sans-serif;
    }
    &:hover, &:active &:focus {
      width: 75%;
      border-bottom: 4px solid #000;
    }
  }
  button {
    height: 2rem;
    width: 4rem;
    color: #000;
    background-color: #fff;
    border: 2px solid #000;
    background-color: transparent;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    cursor: pointer;
    trasition-property: color, background-color;
    transition-duration: 1.2s;
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
}
`;

export default StyledHeader;
