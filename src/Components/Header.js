import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRequest } from '../Actions/SearchAction';
import { Link } from 'react-router-dom';
import {Container,
        Row,
        Col,
        FormGroup,
        FormControl,
        InputGroup,
        Button} from 'react-bootstrap';
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

const Logo = styled(Link)`
  color: #46505a;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
   }
`;

const LogoText = styled.h1`
  margin-bottom: 1rem;
  font-family: 'Lobster', cursive;
  text-align: center;
  font-size: 4rem;
`;

class Header extends Component {
  state = {
    surfing: ''
  }

  doSearch() {
    this.props.makeRequest();
  }

  render() {
    //const { makeRequest } = this.props;
    return (
      <HeaderContainer>
        <Container>
          <Row>
            <Col>
              <Logo to="/" ><LogoText>youtubeApi</LogoText></Logo>
            </Col>
          </Row>
          <Row>
              <Col>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text"
                               value={this.state.surfing}
                               placeholder="serch for videos items..."
                               onChange={event => {this.setState({surfing: event.target.value})}}
                               onKeyPress={event => {
                                 if (event.key === 'Enter') {
                                   this.doSearch()
                                 }
                               }}/>
                  <InputGroup.Append onClick={() => this.doSearch()}>
                    <Button variant="outline-secondary">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </FormGroup>
              </Col>
            </Row>
          </Container>
        </HeaderContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeRequest: () => {
      dispatch(makeRequest())
    }
  }
}

export default connect((state) => {return {}}, mapDispatchToProps)(Header);
