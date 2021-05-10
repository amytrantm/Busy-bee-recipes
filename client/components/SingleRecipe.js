
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
   Container, Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap'
import { addToFavorites, removeFromFavorites } from '../redux/auth'
import { getRecipe } from '../redux/recipe'

class SingleRecipe extends Component {
   constructor(props){
      super(props)
      this.state = {
         //id: props.match.params.id,
         user: props.user || {},
         favRecipes: props.user? props.user : []
      }
   }

   componentDidMount = async () => {
      this.props.getRecipe(this.props.match.params.id);
   }
   
   addToFavorites = (evt) => {
      evt.preventDefault();
      this.props.addToFavorites(this.props.user.id, this.props.match.params.id)
   }

   removeFromFavorites = (evt) => {
      evt.preventDefault();
      
      const user = this.props.user
      const existingFavRecipes = user.favoriteRecipes
      if (!existingFavRecipes) return

      const existingFavRecipeIds = existingFavRecipes.map(r => r.id)
      const recipeIdToBeRemoved =  this.props.recipe.id

      if (existingFavRecipeIds.includes(recipeIdToBeRemoved)) {
         existingFavRecipeIds.splice(existingFavRecipeIds.indexOf(recipeIdToBeRemoved), 1)
      }

     
      this.props.removeFromFavorites(this.props.user.id, recipeIdToBeRemoved )
   }

   favoriteButton = () => {
      const existingFavRecipes = this.props.user.favoriteRecipes

      if (!existingFavRecipes) return
      
      const existingFavRecipeIds = existingFavRecipes.map(r => r.id)
      
      if (!existingFavRecipeIds.includes(this.props.recipe.id)) {
         return <Button onClick={this.addToFavorites}>Add To Favorite</Button>
      } else {
         return <Button onClick={this.removeFromFavorites}>Remove From Favorite</Button>
      }
   }
   
   render(){


      /* console.log('keys: ',Object.keys(this.state.currentRecipe))

      ["vegetarian", "vegan", "glutenFree", "dairyFree", "veryHealthy", "cheap", "veryPopular", "sustainable", "weightWatcherSmartPoints", "gaps", "lowFodmap", "aggregateLikes", "spoonacularScore", "healthScore", "creditsText", "sourceName", "pricePerServing", "extendedIngredients", "id", "title", "readyInMinutes", "servings", "sourceUrl", "image", "imageType", "summary", "cuisines", "dishTypes", "diets", "occasions", "winePairing", "instructions", "analyzedInstructions", "originalId", "spoonacularSourceUrl"] 
      */

      const { title, summary, readyInMinutes, image, instructions, extendedIngredients  } = this.props.recipe

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

const mapState = state => {
   console.log('state', state)
   return {
      user: state.auth,
      recipe: state.recipe
   }  
}

const mapDispatch = dispatch => ({
   updateMe: user => dispatch(updateMe(user)),
   getRecipe: recipeId => dispatch(getRecipe(recipeId)),
   addToFavorites: (userId, recipeId) => dispatch(addToFavorites(userId, recipeId)),
   removeFromFavorites: (userId, recipeId) => dispatch(removeFromFavorites(userId, recipeId))
})

export default connect(mapState, mapDispatch)(SingleRecipe)