import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

export default class Header extends Component {
  state : {
    query: null
  }

  search() {
    console.log('this state is', this.state )
  }

  render() {
    return (
      <header>
        <FormGroup>
          <InputGroup>
            <FormControl type="text"
                         placeholder="serch for videos"
                         //value={this.state.query}
                         onChange={event => {this.setState({query: event.target.value})}}
                         onKeyPress={event => {
                           if (event.key === 'Enter') {
                             this.search()
                           }
                         }}/>
            <InputGroup.Append onClick={() => this.search()}>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
      </header>
    )
  }
}
