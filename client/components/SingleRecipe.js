
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
   Container, Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import { API_KEY } from '../../secrets/api_key'
import axios from 'axios'
import { updateMe } from '../redux/auth';

class SingleRecipe extends Component {
   constructor(props){
      super(props)
      this.state = {
         id: props.match.params.id,
         currentRecipe: [],
         user: props.user || {}
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
         currentRecipe: recipe,
      })
   }
   
   addToFavorite = (evt) => {
      evt.preventDefault();
      const user = this.props.user
      const existingFavRecipes = user.favoriteRecipeIds
      const recipeIdToBeAdded = this.state.currentRecipe.id

      if (!existingFavRecipes.includes(recipeIdToBeAdded)){
         existingFavRecipes.push(recipeIdToBeAdded)
      }

      this.props.updateMe(user);
      this.setState({
         user,
      })
   }

   removeFromFavorite = (evt) => {
       evt.preventDefault();
      const user = this.props.user
      const existingFavRecipes = user.favoriteRecipeIds
      const recipeIdToBeRemoved = this.state.currentRecipe.id

      if (existingFavRecipes.includes(recipeIdToBeRemoved)) {
         existingFavRecipes.splice(existingFavRecipes.indexOf(recipeIdToBeRemoved), 1)
      }

      this.props.updateMe(user);
      this.setState({
         user
      })
   }

   favoriteButton = () => {
      const user = this.props.user
      const existingFavRecipes = user.favoriteRecipeIds
      const recipeIdToBeAdded = this.state.currentRecipe.id


      if (!existingFavRecipes) return
      
      if (!existingFavRecipes.includes(recipeIdToBeAdded)) {
         return <Button onClick={this.addToFavorite}>Add To Favorite</Button>
      } else {
         return <Button onClick={this.removeFromFavorite}>Remove From Favorite</Button>
      }
   }
   
   render(){
      if (!this.state.currentRecipe) {
         return null
      }

      /* console.log('keys: ',Object.keys(this.state.currentRecipe))
      ["vegetarian", "vegan", "glutenFree", "dairyFree", "veryHealthy", "cheap", "veryPopular", "sustainable", "weightWatcherSmartPoints", "gaps", "lowFodmap", "aggregateLikes", "spoonacularScore", "healthScore", "creditsText", "sourceName", "pricePerServing", "extendedIngredients", "id", "title", "readyInMinutes", "servings", "sourceUrl", "image", "imageType", "summary", "cuisines", "dishTypes", "diets", "occasions", "winePairing", "instructions", "analyzedInstructions", "originalId", "spoonacularSourceUrl"] 
      */

      const { title, summary, readyInMinutes, image, instructions, extendedIngredients  } = this.state.currentRecipe

      return (
         <Container>
            <div>
               <Breadcrumb>
                  <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
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
            
            { this.favoriteButton() }
         </Container>
      )
   }
   
}

const mapState = state =>{
   return {
      user: state.auth
   }  
}

const mapDispatch = dispatch => ({
   updateMe: (user) => dispatch(updateMe(user))
})

export default connect(mapState, mapDispatch)(SingleRecipe)