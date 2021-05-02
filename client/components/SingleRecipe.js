import { render } from 'enzyme';
import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { API_KEY, APP_ID } from '../../secrets/api_key'
import axios from 'axios'
const RECIPES_API_URL = 'https://api.edamam.com/search'

class SingleRecipe extends Component {
   constructor(){
      super()
      this.state = {
         currentRecipe: []
      }
   }

   componentDidMount = async () => {

      const LABEL = this.props.location.state.recipe
      const URL = `${RECIPES_API_URL}?app_id=${APP_ID}&app_key=${API_KEY}&q=${LABEL}`
      console.log(`URL`, URL)
      const response = await axios.get(URL)
      console.log(response);
      const recipe = response.data.hits[0]
      console.log('response', recipe)
      this.setState({
         currentRecipe: recipe
      })
   }
   
   render(){
      if (!this.state.currentRecipe.recipe) {
         return null
      }
      const { label } = this.state.currentRecipe.recipe
      console.log(label);
      return (
         <Container>
            <h1>{label}</h1>
            <p>time cook</p>
            <p> ingredients:</p>
         </Container>
      )
   }
   
   
}

export default SingleRecipe