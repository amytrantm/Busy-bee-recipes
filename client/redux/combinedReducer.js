import { combineReducers } from 'redux'
//import isLoadingReducer from './isLoading'
import recipeReducer from './recipe'


const combinedReducer = {
   //isLoading: isLoadingReducer,
   recipe: recipeReducer
};

export default combinedReducer;
