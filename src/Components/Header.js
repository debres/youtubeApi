import React, { Component } from 'react';
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
  text-align: center;
  font-size: 3rem;
`;

class Header extends Component {
  state = {
    surfing: ''
  }

  doSearch() {

  }

  render() {
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
                               placeholder="serch for videos"
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

export default Header;