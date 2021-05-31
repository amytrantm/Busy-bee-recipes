import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

class SearchForm extends Component {
   constructor() {
      super();
      this.state = {
         searchQuery: ''
      }
   }

   setSearchQuery = (evt) => {
      this.setState({
         searchQuery: evt.target.value
      })
   }
   
   render() {
      return (
        <Container>
            <Form inline>
               <FormGroup className="mb-1 mr-sm-1 mb-sm-0">
                  <Input type='text' name="searchName" onChange={this.setSearchQuery} placeholder='Find a recipe'/>
                  {
                     this.state.searchQuery ? 
                     <Link to={`/recipes/search?q=${this.state.searchQuery}`}>
                        <Button color='success'>
                           Search
                        </Button>
                     </Link> :
                        <Button outline color="success">
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