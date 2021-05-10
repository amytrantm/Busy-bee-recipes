import axios from 'axios'
import history from '../history'
import { API_KEY } from '../../secrets/api_key'

const GET_RECIPE = 'GET_RECIPE'
const CREATE_RECIPE = 'CREATE_RECIPE'

const _getRecipe = recipe => ({
   type: GET_RECIPE,
   recipe
})

const _createRecipe = recipe => ({
   type: CREATE_RECIPE,
   recipe
})

export const getRecipeFromSpoonacular = recipeId => {
   return async (dispatch) => {
      try {
         const RECIPES_API_URL = `https://api.spoonacular.com/recipes/${recipeId}/information`
         const URL = `${RECIPES_API_URL}?apiKey=${API_KEY}&id=${recipeId}`

         const { data: recipe } = await axios.get(URL)
         dispatch(createRecipe(recipe))
      } catch (error) {
         console.log('Failed to get recipe from Spoonacular', error);
      }
   }
}

export const getRecipe = recipeId => {
   return async (dispatch) => {
      try {
         const { data: recipe} = await axios.get(`/api/recipes/${recipeId}`, recipe)
         dispatch(_getRecipe(recipe))
      } catch (error) {
         dispatch(getRecipeFromSpoonacular(recipeId))
      }
   }
}

export const createRecipe = (recipe) => {
   return async (dispatch) =>{
      try {
         const {data : recipeCreated} = await axios.post('/api/recipes', recipe)
         dispatch(_createRecipe(recipeCreated))
      } catch (error) {
         console.log('Failed to create recipe (POST/api/recipes)', error)
      }
   }
}

export default function recipeReducer(state = {}, action) {
   switch (action.type) {
      case GET_RECIPE:
         return action.recipe
      case CREATE_RECIPE:
         return action.recipe
      default:
         return state
   }
}