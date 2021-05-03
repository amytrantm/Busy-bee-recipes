
import React, { Component } from 'react';
import {
   Container, Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import { API_KEY } from '../../secrets/api_key'
import axios from 'axios'


class SingleRecipe extends Component {
   constructor(props){
      super(props)
      this.state = {
         id: props.match.params.id,
         currentRecipe: []
      }
   }

   componentDidMount = async () => {
      
      const id = this.state.id
      const RECIPES_API_URL = `https://api.spoonacular.com/recipes/${id}/information`
      
      const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&id=${id}`
      console.log(`URL`, URL)
      const response = await axios.get(URL)
      const recipe = response.data
      this.setState({
         currentRecipe: recipe
      })
   }
   
   render(){
      if (!this.state.currentRecipe) {
         return null
      }

      /* console.log('keys: ',Object.keys(this.state.currentRecipe))
      ["vegetarian", "vegan", "glutenFree", "dairyFree", "veryHealthy", "cheap", "veryPopular", "sustainable", "weightWatcherSmartPoints", "gaps", "lowFodmap", "aggregateLikes", "spoonacularScore", "healthScore", "creditsText", "sourceName", "pricePerServing", "extendedIngredients", "id", "title", "readyInMinutes", "servings", "sourceUrl", "image", "imageType", "summary", "cuisines", "dishTypes", "diets", "occasions", "winePairing", "instructions", "analyzedInstructions", "originalId", "spoonacularSourceUrl"] 
      */
      console.log(this.state.currentRecipe)

      const { title, summary, readyInMinutes, image, instructions, extendedIngredients  } = this.state.currentRecipe
   
      
      return (
         <Container>
            <div>
               <Breadcrumb>
                  <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                  <BreadcrumbItem><a href="/recipes/search">Search Results</a></BreadcrumbItem>
                  <BreadcrumbItem active>Recipe </BreadcrumbItem>
               </Breadcrumb>
            </div>
            <Card>
               <CardImg top style={{ width: "50%" }} src={image} alt="title" />
               <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Cook time: {readyInMinutes} minutes</CardSubtitle>
                  {/* render raw html from {summary} */}
                  <CardText dangerouslySetInnerHTML={{__html: summary}} />
                  
                  <CardText><strong>Ingredients:</strong> </CardText>
                  {
                     (extendedIngredients || []).map(ingredient => (
                        <ul key={ingredient.id}>
                           <li>{ingredient.name} : {ingredient.measures.us.amount} {ingredient.measures.us.unitShort}  </li>
                        </ul>
                     ))

                  }
                  
                  <CardText> <strong>Instructions:</strong> </CardText>
                  <CardText dangerouslySetInnerHTML={{ __html: instructions }} />
               </CardBody>
            </Card>
            <Button>Save This Recipe</Button>

         </Container>
      )
   }
   
}

export default SingleRecipe