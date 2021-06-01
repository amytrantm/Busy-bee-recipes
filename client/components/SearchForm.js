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
         <Form inline>   
               <Input type='text' name="searchName" onChange={this.setSearchQuery} placeholder='Find a recipe'/>
               {
                  this.state.searchQuery ? 
                  <Link to={`/recipes/search?q=${this.state.searchQuery}`}>
                     <Button color='success'>
                        Search
                     </Button>
                  </Link> :
                     <Button  color="success">
                        Search
                     </Button>
               }  
         </Form>
      )
   }
}

export default SearchForm