import React, { Component } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
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
        <div className='container'>
            <Form>
               <FormGroup>
                  <div className="row">
                     <div className='col'>
                        <Input type='text' name="searchName" onChange={this.setSearchQuery}/>
                     </div>
                     <div className='col'>
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
                     </div>
                  </div>
               </FormGroup>
            </Form>
         </div>
      )
   }
}

export default SearchForm