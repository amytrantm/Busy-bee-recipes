import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import SearchResults from './SearchResults'
import SingleRecipe from './SingleRecipe'


class Routes extends Component {

   render() {
      return (
         <div>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/recipes/search' component={SearchResults} />
               <Route path='/recipes/:index' component={SingleRecipe} />
            </Switch>
         </div>
      )
   }
}

export default Routes