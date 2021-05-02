import React, { Component } from 'react'
import { Col } from 'reactstrap'
import Recipe from './Recipe'
import { API_KEY, APP_ID } from '../../secrets/api_key'
import axios from 'axios'
const RECIPES_API_URL = 'https://api.edamam.com/search'


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
      const FROM = 0
      const TO = 50
      const URL = `${RECIPES_API_URL}?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}&from=${FROM}&to=${TO}`
      console.log(`URL`, URL)
      const response = await axios.get(URL)
      const searchResults = response.data.hits.filter(recipe => recipe.recipe.totalTime >=  10 && recipe.recipe.totalTime <= 60)
      this.setState({
         recipes: searchResults
      })
   }

   render() {
      return (
         <Col >
            {
               (this.state.recipes || []).map((recipe, index) => (
                  <Recipe key={index}  recipe={recipe} index={index}/>
               ))
            }
         </Col>
      )
   }
}

export default SearchResults

