import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
/**
 * COMPONENT
 */
class Routes extends Component {

   render() {
      return (
         <div>
            <Switch>
               <Route path='/' component={Home} />
            </Switch>
         </div>
      )
   }
}

export default Routes