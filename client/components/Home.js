import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm';

class Home extends Component {

   render() {
      return (
         <Container>
            <div> welcome to BBR</div>
            <SearchForm/>
         </Container>
      )
   }
}

export default Home