import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRequest } from '../Actions/SearchAction';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  min-height: 60px;
  margin-bottom: 2rem;
  background-color: #fff;
  border-bottom: 2px solid #e6e8eb;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ConstainerFlex = styled.div`
  margin: 0 1rem;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
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

const FormInput = styled.form`
  margin-bottom: 1rem;
`;

class Header extends Component {
  state = {
    surfing: ''
  }

  render() {
    return (
      <HeaderContainer>
        <ConstainerFlex>
          <Logo to="/" >
            <h1>youtubeApi</h1>
          </Logo>
          <FormInput>
            <p>
              <input
                type="search"
                value={this.state.surfing}
                placeholder="serch for videos items..."
                onChange={event => {this.setState({surfing: event.target.value})}}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.props.makeRequest(this.state.surfing)
                  }
                }} />
              <Link to="/"><button onSubmit={this.props.makeRequest(this.state.surfing)}>search</button></Link>
            </p>
          </FormInput>
        </ConstainerFlex>
      </HeaderContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeRequest: (surfing) => {dispatch(makeRequest(surfing))
    }
  }
}

export default connect(() => {}, mapDispatchToProps)(Header);
