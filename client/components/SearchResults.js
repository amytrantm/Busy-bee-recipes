import React, { Component } from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import Recipe from './Recipe'
import { API_KEY } from '../../secrets/api_key'
import axios from 'axios'
import SearchForm from './SearchForm'
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
      const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&query=${query}`
   
      const response = await axios.get(URL)
      const searchResults = response.data.results
      
      this.setState({
         recipes: searchResults
      })
   }

   componentDidUpdate = async(prevProps) => {
      if (this.props.location !== prevProps.location) {
         await this.onRouteChanged();
      }
   }

   onRouteChanged = async () => {
      const search = window.location.search 
      const query = search.substring(3)
      const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&query=${query}`

      const response = await axios.get(URL)
      const searchResults = response.data.results

      this.setState({
         recipes: searchResults
      })
   }

   render() {
      return (
         <Container>
            <Row>
               <Col>
                  <Breadcrumb>
                     <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                     <BreadcrumbItem active>Search Results</BreadcrumbItem>
                  </Breadcrumb>
               </Col>
              <Col>
                <SearchForm/>
               </Col>
            </Row>
            <Row>
               <Col>
               {
                  (this.state.recipes || []).map(recipe => (
                     <Recipe key={recipe.id} recipe={recipe} />
                  ))
               }
               </Col>
            </Row>
               
         </Container>
      )
   }
}

export default SearchResults

