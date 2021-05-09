import React, { Component } from 'react';
import { connect } from "react-redux";

import SearchForm from './SearchForm'

class Home extends Component {

   render() {
      const { isLoggedIn } = this.props;

      return (
         <div className='home'>
            {
               isLoggedIn ? 
               ( <SearchForm />) :
               (<div> 
                     
                  <h4> Let's make a yummy meal today! </h4>
                  <h5>Sign in to save recipes to favorite</h5>
                  <SearchForm/>
               </div>
               )
            }
           
         </div>
      )
   }
}

const mapState = state => {
   return {
      isLoggedIn: !!state.auth.id,
   };
};

export default connect(mapState)(Home)