import React, { Component } from 'react'
import { withRouter,Route, Switch, Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import Home from './Home'
import SearchResults from './SearchResults'
import SingleRecipe from './SingleRecipe'
import FavoriteRecipes from './FavoriteRecipes'
import { Login, Signup } from "./AuthForm"
import { getMe } from "../redux/auth";

class Routes extends Component {
   componentDidMount() {
      this.props.loadInitialData();
   }

   render() {
      const { isLoggedIn } = this.props;

      return (
         <div>
            {
               isLoggedIn ? (
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/recipes/search' component={SearchResults} />
                     <Route path='/recipes/:id/information' component={SingleRecipe} />
                     <Route path='/favorite-recipes' component={FavoriteRecipes} />
                  </Switch>
               ) : (
                  <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path='/recipes/search' component={SearchResults} />
                        <Route path='/recipes/:id/information' component={SingleRecipe} />
                  </Switch>
                  
               )
            }
            
         </div>
      )
   }
}

const mapState = (state) => {
   return {
      isLoggedIn: !!state.auth.id,
   };
};

const mapDispatch = (dispatch) => {
   return {
      loadInitialData() {
         dispatch(getMe());
      },
   };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));


