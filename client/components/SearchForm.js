import React, { Component } from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { API_KEY, APP_ID } from '../../secrets/api_key'
import axios from 'axios'
const RECIPES_API_URL = 'https://api.edamam.com/search'


class SearchForm extends Component {
   constructor() {
      super();
      this.state = {
         searchQuery: ''
      }
   }

   setSearchQuery = (evt) => {
      console.log('evt.target,value', evt.target.value)
      this.setState({
         searchQuery: evt.target.value
      })
   }
   
   render() {
      return (
         <Container>
            <Form>
               <FormGroup>
                  <Input type='text' name="searchName" onChange={this.setSearchQuery}/>
                  {
                     this.state.searchQuery ? 
                     <Link to={`/recipes/search?q=${this.state.searchQuery}`}>
                        <Button color='primary'>
                           Search
                        </Button>
                     </Link> :
                        <Button color='primary'>
                           Search
                        </Button>
                  }
               </FormGroup>
            </Form>

         </Container>
      )
   }
}

export default SearchForm