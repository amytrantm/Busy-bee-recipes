import React, { Component } from 'react'
import { Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Recipe from './Recipe'
import { API_KEY } from '../../secrets/api_key'
import axios from 'axios'
const RECIPES_API_URL = 'https://api.spoonacular.com/recipes/complexSearch'


class SearchResults extends Component {
   constructor() {
      super()
      this.state = {
         recipes: []
      }
   }

   componentDidMount = async () => {

      const search = window.location.search // "?q=chicken"
      const query = search.substring(3) // "chicken"
      console.log('query', query)
      // const FROM = 0
      // const TO = 50
      const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&query=${query}`
      console.log(`URL`, URL)
      const response = await axios.get(URL)
      const searchResults = response.data.results
      
      this.setState({
         recipes: searchResults
      })
   }

   render() {
      return (
         <div>
            <div >
               <Breadcrumb>
                  <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                  <BreadcrumbItem active>Search Results</BreadcrumbItem>
               </Breadcrumb>
            </div>
            <Col >
               {
                  (this.state.recipes || []).map(recipe => (
                     <Recipe key={recipe.id} recipe={recipe} />
                  ))
               }
            </Col>
         </div>
      )
   }
}

export default SearchResults

